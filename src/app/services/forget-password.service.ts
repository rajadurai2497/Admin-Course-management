import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { ROUTE_CONFIG } from '../models/constant';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService extends ApiService {

  constructor(private readonly injector: Injector) {
    super(injector);

  }

  getForgetPassword(mailId): Promise<any> {
    const apiUrl = ROUTE_CONFIG. BaseUrl + `/Token/ForgetPassword?MailId=`+mailId;
    return this.doGet(apiUrl, true);
  }

  getPasswordChange(password): Promise<any> {
    const apiUrl = ROUTE_CONFIG. BaseUrl + `/Token/ChangePassword?oldPassword=`+password.oldPassword+`&newPassword=`+password.newPassword;
    return this.doGet(apiUrl, true);
  }
}
