import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROUTE_CONFIG } from '../models/constant';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PurchaseManagementService extends ApiService{
 
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient);
  }

  getAllPurchaseManagement(): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/GetAllPurchaseMangement`;
    return this.doGet(apiUrl,true);
  }
}