import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommunityUserModel } from '../models/community-user.model';
import { Observable } from 'rxjs';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CommunityUserService {
public routePrefix = 'Admin/GetCommunityMangement';

  constructor(private readonly httpClient: HttpClient) { }

  getAllCommunityUser(): Observable<CommunityUserModel> {
    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.get<CommunityUserModel>(apiUrl);
  }

}
