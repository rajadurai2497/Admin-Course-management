import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService extends ApiService{

  constructor(private readonly injector: Injector) {
    super(injector);

  }

  getAdminDashboard(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetAdminDashboard`;
    return this.doGet(apiUrl, true);
  }
}
