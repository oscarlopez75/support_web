import { Injectable } from '@angular/core';


@Injectable()
export class ProcessAsiaService {

  emergency: any = [];
  critical: any = [];
  major: any = [];
  medium: any = [];
  emergencySort: any = [];
  criticalSort: any = [];
  majorSort: any = [];
  mediumSort: any = [];
  bigObject = {};

  constructor() { }



  getData(data){

    let promise = new Promise((resolve, reject) => {
      let summary = "";
      let assignee = "";
      let assigneeEmail = "";
      let reporter = "";
      let reporterEmail = "";
      let priority = "";
      let lastUpdated = "";
      let status = "";
      let link = "";



      for(var x = 0; x < data.issues.length; x++){
        summary = data.issues[x].fields.summary;
        priority = data.issues[x].fields.priority.name;

        try{
          assignee = data.issues[x].fields.assignee.name;
        }catch(err) {
          assignee = "Unassigned"
          // console.log(err);
        }

        try{
          assigneeEmail = data.issues[x].fields.assignee.emailAddress
        }catch(err) {
          assigneeEmail = "Unassigned"
          // console.log(err);
        }


        reporter = data.issues[x].fields.reporter.name;
        reporterEmail = data.issues[x].fields.reporter.emailAddress;
        lastUpdated = data.issues[x].fields.updated;
        status = data.issues[x].fields.status.name;
        link = "https://jira.realtimegaming.com/browse/" + data.issues[x].key;

        switch(priority){
          case 'Emergency': {
            this.emergency.push({summary: summary, assignee: assignee, assigneeEmail: assigneeEmail, reporter: reporter, reporterEmail: reporterEmail, lastUpdated: lastUpdated, status: status, link: link});
            break;
          }
          case 'Critical': {
            this.critical.push({summary: summary, assignee: assignee, assigneeEmail: assigneeEmail, reporter: reporter, reporterEmail: reporterEmail, lastUpdated: lastUpdated, status: status, link: link});
            break;
          }
          case 'Major': {
            this.major.push({summary: summary, assignee: assignee, assigneeEmail: assigneeEmail, reporter: reporter, reporterEmail: reporterEmail, lastUpdated: lastUpdated, status: status, link: link});
            break;
          }
          case 'Medium': {
            this.medium.push({summary: summary, assignee: assignee, assigneeEmail: assigneeEmail, reporter: reporter, reporterEmail: reporterEmail, lastUpdated: lastUpdated, status: status, link: link});
            break;
          }
        }

      }

      this.emergencySort = [];
      this.emergencySort = this.emergency.sort(function (a,b) {
        if (a.lastUpdated < b.lastUpdated)
          return -1;
        if (a.lastUpdated > b.lastUpdated)
          return 1;
        return 0;
      });

      this.criticalSort = [];
      this.criticalSort = this.critical.sort(function (a,b) {
        if (a.lastUpdated < b.lastUpdated)
          return -1;
        if (a.lastUpdated > b.lastUpdated)
          return 1;
        return 0;
      });

      this.majorSort = [];
      this.majorSort = this.major.sort(function (a,b) {
        if (a.lastUpdated < b.lastUpdated)
          return -1;
        if (a.lastUpdated > b.lastUpdated)
          return 1;
        return 0;
      });

      this.mediumSort = [];
      this.mediumSort = this.medium.sort(function (a,b) {
        if (a.lastUpdated < b.lastUpdated)
          return -1;
        if (a.lastUpdated > b.lastUpdated)
          return 1;
        return 0;
      });

      this.bigObject = {emergency: this.emergencySort, critical: this.criticalSort, major: this.majorSort, medium: this.mediumSort};
      resolve(this.bigObject);

    });

    return promise;
  }

}
