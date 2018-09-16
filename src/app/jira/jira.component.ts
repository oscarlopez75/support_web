import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jira',
  templateUrl: './jira.component.html',
  styleUrls: ['./jira.component.css']
})
export class JiraComponent implements OnInit {

  resultsArray = [];
  resolvedIssues: string;
  resolvedIssues2: string;
  showLoadingComponent: boolean = true;
  showResolved: boolean = false;

  constructor(private totalService: TotalService, private auth: AuthService, private router: Router) {
    setInterval(() => this.reloadPage(), 600000);
  }

  ngOnInit() {
    this.totalService.getJiraOutdate(this.auth.getToken()).subscribe(results => {
        this.showLoadingComponent = false;
        this.proRecs(results);
        this.totalService.getJiraResolved(this.auth.getToken()).subscribe(results => {
            this.proResolved(results);
          },
          error => {
            console.log(error);
            this.auth.logout();
            this.router.navigate(['login']);
          }
        );
      },
      error => {
        this.auth.logout();
        this.router.navigate(['login']);
      }
    );



  }


  proRecs(data){
    for(var i = 0; i < data.report.length; i++){
      this.resultsArray.push(data.report[i]);
    }
  }

  proResolved(data){
    this.resolvedIssues = "There are " + data.report[0].filterAmount + " Production Defects resolved but not close:"
    this.resolvedIssues2 = data.report[0].filterLink;
    this.showResolved = true;
  }

  convertTime(hours){
    let days = parseInt(hours) / 24;

    if(days < 6){
      if(days == 1){
        return days + " day"
      }else{
        return days + " days"
      }
    }else if(days == 7){
      return "1 week"
    }else{
      return days / 7 + " weeks"
    }



  }

  reloadPage() {
       location.reload();
   }

}
