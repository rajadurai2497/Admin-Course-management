import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';
import { EditChapterComponent } from 'src/app/dashboard/dash-analytics/course-management/edit-chapter/edit-chapter.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [UserProfileComponent, EditUserprofileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ],
  entryComponents: [EditUserprofileComponent]
})
export class UserProfileModule { }
