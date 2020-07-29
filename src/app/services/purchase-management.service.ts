import { Injectable, Injector } from '@angular/core';
import { ROUTE_CONFIG } from '../models/constant';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseManagementService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);
  }

  getAllPurchaseManagement(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetAllPurchaseMangement`;
    return this.doGet(apiUrl, true);
  }
  refundData(payment): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/PutRefundData`;
    return this.doPost(apiUrl, payment, true);
  }
}