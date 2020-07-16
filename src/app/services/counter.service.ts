import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class CounterService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);

  }
  public addCount(courseMasterId,count): Promise<any> {
    const apiUrl = ROUTE_CONFIG.CourseManagementURL + `/Admin/IncreaseCount?Count=` + count+`&CourseMasterId=` + courseMasterId;
    return this.doGet(apiUrl, true);
  }
}

