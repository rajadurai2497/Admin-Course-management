import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseManagementService } from 'src/app/services/course-management.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-course-management',
  templateUrl: './add-course-management.component.html',
  styleUrls: ['./add-course-management.component.scss'],
  providers:[CourseManagementService]
})
export class AddCourseManagementComponent implements OnInit {
  basicContent: string;
  courseName: string;
  abtCourse: string;
  weprovide:string;
  price: number;

  constructor(
    public dialogRef: MatDialogRef<AddCourseManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private courseManagementService:CourseManagementService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  addCourse(){
    const course={
        courseMasterId: 0,
        courseName:this.courseName,
        courseAmount: this.price,
        description: this.abtCourse,
        provideWhat:this.weprovide
    }
    this.courseManagementService.addCourse(course).then(data=>{

    })

  }
}
