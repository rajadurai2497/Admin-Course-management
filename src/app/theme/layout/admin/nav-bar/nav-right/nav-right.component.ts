import {Component, DoCheck, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import {GradientConfig} from '../../../../../app-config';
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from 'src/app/users/user-profile/change-password/change-password.component';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig,AuthenticationService],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class NavRightComponent implements OnInit, DoCheck {
  public visibleUserList: boolean;
  public chatMessage: boolean;
  public friendId: boolean;
  public gradientConfig: any;

  constructor(private authenticationService:AuthenticationService,private dialog: MatDialog) {
    this.visibleUserList = false;
    this.chatMessage = false;
    this.gradientConfig = GradientConfig.config;
  }

  ngOnInit() { }

  onChatToggle(friendID) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }
 
  ngDoCheck() {
    if (document.querySelector('body').classList.contains('elite-rtl')) {
      this.gradientConfig['rtl-layout'] = true;
    } else {
      this.gradientConfig['rtl-layout'] = false;
    }
  }
  logout(){
    this.authenticationService.logout();
  }
  changePassword(){
    let dialogRef = this.dialog.open(ChangePasswordComponent, {
      height: '400px',
      width: '400px',
    });
  }
}
