import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TotalService } from '../total.service';
import { AuthService } from '../auth.service';
import { ProcessAsiaService } from '../process-asia.service';


@Component({
  selector: 'app-jira-asia',
  templateUrl: './jira-asia.component.html',
  styleUrls: ['./jira-asia.component.css']
})
export class JiraAsiaComponent implements OnInit {

  jiraAsiaName: string;
  jiraAsiaLink: string;
  jiraAsiaNumber: number;
  textToShow: string;
  showLoadingComponent: boolean = true;
  showLoadingComponent2: boolean = true;

  emergency: any = [];
  critical: any = [];
  major: any = [];
  medium: any = [];

  totalEmergency: number;
  totalCritical: number;
  totalMajor: number;
  totalMedium: number;

  constructor(private totalService: TotalService, private auth: AuthService, private router: Router, private proAsia: ProcessAsiaService) {
    setInterval(() => this.reloadPage(), 600000);
  }

  ngOnInit() {
    this.totalService.getJiraAsia(this.auth.getToken()).subscribe(results => {
        this.showLoadingComponent = false;
        this.proIssues(results);
      },
      error => {
        this.auth.logout();
        this.router.navigate(['login']);
        console.log("Sorry there was a problem: " + error.error.message)
      }
    );
  }


  proIssues(results){

    this.textToShow = "";

    this.jiraAsiaName = results.report[0].filterName;
    this.jiraAsiaLink = results.report[0].filterLink;
    this.jiraAsiaNumber = results.report[0].filterAmount;

    if(this.jiraAsiaNumber === 1){
      this.textToShow = "There is " + this.jiraAsiaNumber + " unclosed issue in Asia"
    }else{
      this.textToShow = "There are " + this.jiraAsiaNumber + " unclosed issues in Asia"
    }


    let filterNumber = results.report[0].filterNumber;
    let filterName = results.report[0].filterName;
    this.totalService.getTotalsAsia(filterNumber, filterName, this.auth.getToken()).subscribe(results => {
        this.proAsia.getData(results)
          .then(data =>{
            this.proIssues2(data);
          })
          .catch()
      },
      error => {
        this.auth.logout();
        this.router.navigate(['login']);
      }
    );


  }

  proIssues2(data){
    // console.log(data);
    for(var x = 0; x < data.emergency.length; x++){
      this.emergency.push(data.emergency[x]);
    }
    for(var x = 0; x < data.critical.length; x++){
      this.critical.push(data.critical[x]);
    }
    for(var x = 0; x < data.major.length; x++){
      this.major.push(data.major[x]);
    }
    for(var x = 0; x < data.medium.length; x++){
      this.medium.push(data.medium[x]);
    }

    this.totalEmergency = data.emergency.length;
    this.totalCritical = data.critical.length;
    this.totalMajor = data.major.length;
    this.totalMedium = data.medium.length;

    this.showLoadingComponent2 = false;
  }

  convertToHours(date){
    let updatedLast = Date.parse(date);
    let today = new Date();
    let todayToGMT = today.toUTCString();
    let todayGmt = Date.parse(todayToGMT);
    let s = todayGmt - updatedLast;
    // console.log(updatedLast + " " + today + " " + diff)

    function pad(n, z) {
      z = z || 5;
      return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    if(hrs < 48){
      return hrs + " hours ago";
    }else{
      return Math.trunc(hrs/24) + " days ago";
    }


  }

  reloadPage() {
       location.reload();
   }

}
