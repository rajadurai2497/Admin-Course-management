import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementService extends ApiService{
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }
  addCourse(course):Promise<any>{
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewCourse`;
    return this.doPost(apiUrl,course,true);
  }
}
