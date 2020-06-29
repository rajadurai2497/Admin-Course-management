import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserManagementModel } from '../models/user-management.model';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
public routePrefix = 'Admin/GetAllUserMangement';

  constructor(private readonly httpClient: HttpClient) { }

  getAllUserManagement(): Observable<UserManagementModel> {
    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.get<UserManagementModel>(apiUrl);
  }

}
