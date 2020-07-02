import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { ApiService } from '../api.service';
import { ROUTE_CONFIG } from 'src/app/models/constant';
import { AllCourseModel } from 'src/app/models/course-management/courselist.model';

@Injectable({
  providedIn: 'root'
})
export class CourselistService extends ApiService {
  getAllCourse() {
    throw new Error("Method not implemented.");
  }
  getAllCommunityUser() {
    throw new Error("Method not implemented.");
  }

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  getAllCourselist(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetAllCourseList`;
    return this.doGet(apiUrl, true);
  }

}

