import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends ApiService{

  constructor(private readonly injector: Injector) {
    super(injector);

  }

  getUserProfile(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.BaseUrl + `/Token/GetMyProfile`;
    return this.doGet(apiUrl, true);
  }
  updateUserProfile(userprofile): Promise<any> {
    const apiUrl = ROUTE_CONFIG.BaseUrl + `/Token/RegisterUser`;
    return this.doPost(apiUrl,userprofile, true);
  }
  
}
