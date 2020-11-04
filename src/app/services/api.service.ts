import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
providedIn: 'root'
})
export class ApiService {

protected _loadingService: LoadingService;
protected _http: HttpClient;

constructor(injector: Injector) {
this._loadingService = injector.get(LoadingService);
this._http = injector.get(HttpClient);
}

doGet(url: string, isShowLoading?: boolean): any {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
'Content-Type': 'application/x-www-form-urlencoded'
});

if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}


const requestOptions = { headers: headers
};
return this._http.get(url, requestOptions).toPromise().then(response => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return response;
}).catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}
doDelete(url: string, isShowLoading?: boolean): any {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
'Content-Type': 'application/x-www-form-urlencoded'
});
if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}
const requestOptions = {
headers: headers,
};
return this._http.delete(url, requestOptions).toPromise().then(response => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return response;
}).catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}

doPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
'Content-Type': 'application/json'
});
if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}
const requestOptions = {
headers: headers,
};
return this._http.post(url, JSON.stringify(body), requestOptions)
.toPromise()
.then(res => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return res;
})
.catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}
doPut(url: string, body: any, isShowLoading?: boolean): Promise<any> {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
'Content-Type': 'application/json'
});

if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}
const requestOptions = {
headers: headers,
};
return this._http.put(url, JSON.stringify(body), requestOptions)
.toPromise()
.then(res => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return res;
})
.catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}

doFormUrlPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
'Content-Type': 'application/x-www-form-urlencoded'
});

if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}

const requestOptions = {
headers: headers,
};
return this._http.post(url, body, requestOptions)
.toPromise()
.then(res => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return res;
})
.catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}
doFormPost(url: string, body: any, isShowLoading?: boolean): Promise<any> {
let currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (isShowLoading) {
this._loadingService.displayLoader(true);
}
let headers = new HttpHeaders({
});
if (currentUser && currentUser.access_token) {
headers = headers.append('Authorization', "bearer " + currentUser.access_token);
}
const requestOptions = {
headers: headers,
};
return this._http.post(url, body, requestOptions)
.toPromise()
.then(res => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
return res;
})
.catch((e) => {
if (isShowLoading) {
this._loadingService.displayLoader(false);
}
});
}
}