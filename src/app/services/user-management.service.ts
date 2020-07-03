import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);

  }

  getAllUserManagement(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetAllUserMangement`;
    return this.doGet(apiUrl, true);
  }

}


