import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService extends ApiService{

  constructor(private readonly httpClient: HttpClient) { 
  super(httpClient);

  }

  getAllUserManagement(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetAllUserMangement`;
  return this.doGet(apiUrl,true);
  }

}


