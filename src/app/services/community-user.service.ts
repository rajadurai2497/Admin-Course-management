import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CommunityUserService extends ApiService {

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  getAllCommunityUser(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetCommunityMangement`;
    return this.doGet(apiUrl, true);
  }

}
