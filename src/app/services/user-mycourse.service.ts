import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class UserMycourseService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);
  }

  getPurchasedCourseList(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + '/Course/GetChapterCounterByUserId';
    return this.doGet(apiUrl, true);
  }

  getCourseChapterList(courseMasterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetCourseChapterByCourseId?courseMasterId=` + courseMasterId;
    return this.doGet(apiUrl, true);
  }

  getSlideByChapter(ChapterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetCourseSlideByChapterId?ChapterId=` + ChapterId;
    return this.doGet(apiUrl, true);
  }

  completedChapterCheckbox(ChapterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/CompleteChapterByChapterId?ChapterId=` + ChapterId;
    return this.doGet(apiUrl, true);
  }


  getAttachmentSlide(SlideId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetSlideAttachmentBySlideId?SlideId=` + SlideId;
    return this.doGet(apiUrl, true);
  }

}
