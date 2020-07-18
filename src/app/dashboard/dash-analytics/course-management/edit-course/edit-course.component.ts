import { Component, OnInit, Inject, Input } from '@angular/core';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AllCourse } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courseMap: AllCourse = new AllCourse();

  constructor(public dialogRef: MatDialogRef<EditCourseComponent>,
    private readonly _courselistService: CourseManagementService,
    @Inject(MAT_DIALOG_DATA) public data: AllCourse) {
  }

  ngOnInit() {
  }

  public updateCourse(): void {
    this.courseMap.courseMasterId = this.data.courseMasterId;
    this.courseMap.courseName = this.data.courseName;
    this.courseMap.provideWhat = this.data.provideWhat;
    this.courseMap.description = this.data.description;
    this.courseMap.courseAmount = this.data.courseAmount ? parseInt(this.data.courseAmount + "") : 0;
    this.courseMap.dicountAmount = this.data.dicountAmount ? parseInt(this.data.dicountAmount + "") : 0;
    this._courselistService.updateCourse(this.courseMap).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(data.saveResult);
        alert('Course updated successfully...!')
      }
      else {
        alert('Unable to Update Course')
      }
    });
  }

}
