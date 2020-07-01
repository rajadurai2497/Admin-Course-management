import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) {

  }

  doGet(url: string, isShowLoading?: boolean): any {
    let headers = new HttpHeaders();

    const requestOptions = {
      headers: headers,
    };
    return this._http.get(url, requestOptions).toPromise().then(response => {
      return response;
    })
  }
  doDelete(url: string, isShowLoading?: boolean): any {
    let headers = new HttpHeaders();

    const requestOptions = {
      headers: headers,
    };
    return this._http.delete(url, requestOptions).toPromise().then(response => {
      return response;
    })
  }

  doPost(url: string, body: any, showLoading?: boolean): Promise<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestOptions = {
      headers: headers,
    };
    return this._http.post(url, JSON.stringify(body), requestOptions)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch((e) => {

      });
  }
  doPut(url: string, body: any, showLoading?: boolean): Promise<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // if (this._communicationService.userToken) {
    //   headers = headers.append('userToken', this._communicationService.userToken + '');
    // }
    const requestOptions = {
      headers: headers,
    };
    return this._http.put(url, JSON.stringify(body), requestOptions)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch((e) => {

      });
  }

  doFormUrlPost(url: string, body: any, showLoading?: boolean): Promise<any> {

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const requestOptions = {
      headers: headers,
    };
    return this._http.post(url, body, requestOptions)
      .toPromise()
      .then(res => {
        return res;
      })
      .catch((e) => {

      });
  }
}