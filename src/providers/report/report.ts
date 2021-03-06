import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Server } from '../server-config/server-config';

/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportProvider {

  constructor(public http: HttpClient, public server: Server) {
    console.log('Hello ReportProvider Provider');
  }

  saveReport(data): Promise<any> {
    return this.http.post(this.server.url + 'reports/', data)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  getReports(): Promise<any> {
    return this.http.get(this.server.url + 'reportsbyuser/')
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  getBadge(): Promise<any> {
    return this.http.get(this.server.url + 'reportsbyuserbadge/')
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  changeStatus(data): Promise<any> {
    return this.http.post(this.server.url + 'reportschangestatus/' + data._id, data)
      .toPromise()
      .then((response) => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
