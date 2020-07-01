import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from 'src/app/models/constant';

@Injectable({
  providedIn: 'root'
})
export class AddcoursemanagementService extends ApiService{

  constructor(private readonly httpClient: HttpClient) { 
    super(httpClient);
  }
  addCourse(course):Promise<any>{
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewCourse`;
    return this.doPost(apiUrl,course,true);
  }
}