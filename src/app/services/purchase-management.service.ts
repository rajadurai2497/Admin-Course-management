import { Injectable } from '@angular/core';
import { PurchaseManagementModel } from '../models/purchase-management.model';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PurchaseManagementService {
  public routePrefix = 'Admin/GetAllPurchaseMangement';

  constructor(private readonly httpClient: HttpClient) {}

  getAllPurchaseManagement(): Observable<PurchaseManagementModel> {
    const apiUrl = `${ROUTE_CONFIG.CourseManagementURL}/${this.routePrefix}`;
    return this.httpClient.get<PurchaseManagementModel>(apiUrl);
  }
}
