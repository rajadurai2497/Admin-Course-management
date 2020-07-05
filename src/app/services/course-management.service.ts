import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CourseManagementService extends ApiService {
  constructor(private readonly injector: Injector) {
    super(injector);
  }
  addCourse(course): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewCourse`;
    return this.doPost(apiUrl, course, true);
  }
  getAllCourselist(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetAllCourseList`;
    return this.doGet(apiUrl, true);
  }
  addChapter(chapter): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewCourse`;
    return this.doPost(apiUrl, chapter, true);
  }

}
