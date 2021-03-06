import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityUserService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);
  }

  getAllCommunityUser(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetCommunityMangement`;
    return this.doGet(apiUrl, true);
  }

}
