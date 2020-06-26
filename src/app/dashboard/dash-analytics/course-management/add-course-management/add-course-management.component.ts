import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { providers } from 'ng2-toasty';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-course-management',
  templateUrl: './add-course-management.component.html',
  styleUrls: ['./add-course-management.component.scss'],
})
export class AddCourseManagementComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCourseManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
