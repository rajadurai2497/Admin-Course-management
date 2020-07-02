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
   var t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJBZG1pbiIsInN1YiI6IkFkbWluIiwiZW1haWwiOiIiLCJqdGkiOiI2RDQxQjM2Ni02OUFDLTRBMzItQUQxRi01MTUxOThCRjY4OEUiLCJleHAiOjE1OTU0MTE2MjcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTMwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUzMDAwIn0.ieRtRRSqaM_4DGgpquT-7GWJb0m4fL888CBGGSHNCJk"
    headers = headers.append('Authorization',"Bearer" + t);
    const requestOptions = {
      headers: headers,
    };
    return this._http.get(url, requestOptions).toPromise().then(response => {
      return response;
    })
  }
  doDelete(url: string, isShowLoading?: boolean): any {
    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', "jwt token");
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
    var t="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJBZG1pbiIsInN1YiI6IkFkbWluIiwiZW1haWwiOiIiLCJqdGkiOiI2RDQxQjM2Ni02OUFDLTRBMzItQUQxRi01MTUxOThCRjY4OEUiLCJleHAiOjE1OTU0MTE2MjcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTMwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUzMDAwIn0.ieRtRRSqaM_4DGgpquT-7GWJb0m4fL888CBGGSHNCJk"
    headers = headers.append('Authorization',"Bearer" + t);
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
    // headers = headers.append('Authorization', "jwt token");
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

    // headers = headers.append('Authorization', "jwt token");

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