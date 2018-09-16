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
export class FilterService {

  constructor(private http: HttpClient) { }

  getAllFilters(){
    var body = {};

    return this.http.post<{}>('http://localhost:4600/routes/getFiltersFilter', body, httpOptions);

  }

}
