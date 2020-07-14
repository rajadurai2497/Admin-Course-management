import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService extends ApiService {

  constructor(private readonly injector: Injector, private readonly httpClient: HttpClient) {
    super(injector);
  }

  fileUpload(FormData, slide): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/CreateNewSlideAttachementsImage?SlideId=` + slide.slideId;
    return this.doFormPost(apiUrl, FormData, true);
  }

  fileShow(slide): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetSlideAttachmentBySlideIdForAdmin?SlideId=` + slide.slideId;
    return this.doGet(apiUrl,true);
  }
  deleteAttach(attachId): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/DeleteSlideAttachment?ChapterSlideAttachementId=` +attachId;
    return this.doGet(apiUrl, true);
  }
}
