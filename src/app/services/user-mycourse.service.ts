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

  getPurchasedCourseList(): Promise<any>{
    // const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    // currentUser.useId
    // const apiUrl=`${ROUTE_CONFIG.BaseUrl}/v1/Course/getPurchasedCourseForUsers?userId=${currentUser.userId}`;
    const apiUrl=ROUTE_CONFIG.BaseUrl+'/v1/Course/GetChapterCounterByUserId';

    console.log(apiUrl)
    return this.doGet(apiUrl,true);
  }

  getCourseChapterList(courseMasterId): Promise<any>{
    // const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    // currentUser.useId/api/v1/Course/GetCourseChapterByCourseId
    const apiUrl=`${ROUTE_CONFIG.BaseUrl}/v1/Course/GetCourseChapterByCourseId?courseMasterId=${courseMasterId}`;
    // const apiUrl=ROUTE_CONFIG.BaseUrl+'/v1/Course/GetPurchasedCourseForUsers?userId:currentUser.useId';
    console.log(apiUrl)
    return this.doGet(apiUrl,true);
  }

  getSlideByChapter(ChapterId): Promise<any>{
    const apiUrl=`${ROUTE_CONFIG.BaseUrl}/v1/Course/GetCourseSlideByChapterId?ChapterId=${ChapterId}`;
    console.log(apiUrl)
    return this.doGet(apiUrl,true);
  }

  completedChapterCheckbox(ChapterId): Promise<any>{
    const apiUrl=`${ROUTE_CONFIG.BaseUrl}/v1/Course/CompleteChapterByChapterId?ChapterId=${ChapterId}`;
    console.log(apiUrl)
    return this.doGet(apiUrl,true);
  }


  getAttachmentSlide(slideAttachmentId): Promise<any>{
    // const currentUser=JSON.parse(localStorage.getItem('currentUser'));
    // currentUser.useId
    const apiUrl=`${ROUTE_CONFIG.BaseUrl}/v1/Course/GetSlideAttachmentBySlideId?SlideId=${slideAttachmentId}`;
    // const apiUrl=ROUTE_CONFIG.BaseUrl+'/v1/Course/GetChapterCounterByUserId';

    console.log(apiUrl)
    return this.doGet(apiUrl,true);
  }
  
}
