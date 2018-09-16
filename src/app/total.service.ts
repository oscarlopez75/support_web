import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      "cache-control": "no-cache",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "access-control-allow-headers": "X-Requested-With,content-type",
      "access-control-allow-credentials": "true"
    })
};

@Injectable()
export class TotalService {

  constructor(private http: HttpClient) { }

getTotals(filterNumber, filterName, count){
  var body = {filternumber: filterNumber, filtername: filterName};

  return this.http.post<{}>('http://localhost:4600/routes/getTotal', body, httpOptions);

}

  getTotalsAsia(filterNumber, filterName, token){
    var body = {filternumber: filterNumber, filtername: filterName, token: token};

    return this.http.post<{}>('http://localhost:8082/getTotalAsia', body, httpOptions);

  }

  getJiraOutdate(token){

    const httpOptions = {
        headers: new HttpHeaders({
          "content-type": "application/json",
          "cache-control": "no-cache",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "access-control-allow-headers": "X-Requested-With,content-type",
          "access-control-allow-credentials": "true",
          "authorization": token
        })
    };

    return this.http.get<{}>('http://localhost:8082/getReport',httpOptions);
  }

  getJiraAsia(token){

    const httpOptions = {
        headers: new HttpHeaders({
          "content-type": "application/json",
          "cache-control": "no-cache",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "access-control-allow-headers": "X-Requested-With,content-type",
          "access-control-allow-credentials": "true",
          "authorization": token
        })
    };

    return this.http.get<{}>('http://localhost:8082/getAsian',httpOptions);

  }

  getJiraResolved(token){

    const httpOptions = {
        headers: new HttpHeaders({
          "content-type": "application/json",
          "cache-control": "no-cache",
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
          "access-control-allow-headers": "X-Requested-With,content-type",
          "access-control-allow-credentials": "true",
          "authorization": token
        })
    };

    return this.http.get<{}>('http://localhost:8082/getResolved',httpOptions);

  }

}
