import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { UserProfileModel } from 'src/app/models/user/user-profile.model';
import { ROUTE_CONFIG } from 'src/app/models/constant';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends ApiService {

  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }
  getAllUserProfile(): Promise<UserProfileModel> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetMyProfile`;
    return this.doGet(apiUrl, true);
  }

}
