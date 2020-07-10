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
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewChapterAndSlide`;
    return this.doPost(apiUrl, chapter, true);
  }

   deleteCourse(courseMasterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/DeleteCourse?CourseMasterId=`+courseMasterId;
    return this.doGet(apiUrl, true);
  }
  deleteChapter(chapterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/DeleteChapter?ChapterId=`+chapterId;
    return this.doGet(apiUrl, true);
  }
  deleteTopic(slideId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/DeleteSlide?SlideId=`+slideId;
    return this.doGet(apiUrl, true);
  }
  getCourseChapters(slideId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetCourseGetChapterGetSlide?CourseMasterId=`+slideId;
    return this.doGet(apiUrl, true);
  }
  updateChapter(chapter): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewChapterAndSlide`;
    return this.doPost(apiUrl,chapter, true);
  }
  updateCourse(course): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewCourse`;
    return this.doPost(apiUrl,course, true);
  }
  updateTopic(topic): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewChapterAndSlide`;
    return this.doPost(apiUrl,topic, true);
  }
  addTopic(topic): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewChapterAndSlide`;
    return this.doPost(apiUrl, topic, true);
  }
  getChapterDetails(chapterId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Course/GetCourseSlideByChapterId?ChapterId=`+chapterId;
    return this.doGet(apiUrl, true);
  }
}
