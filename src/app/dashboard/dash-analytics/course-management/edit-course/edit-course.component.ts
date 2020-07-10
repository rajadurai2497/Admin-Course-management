import { Component, OnInit, Inject, Input } from '@angular/core';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChapterEntity, AddChapter, AddCourse } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  courseMap:AddCourse=new AddCourse();
  
  constructor(public dialogRef: MatDialogRef<EditCourseComponent>, 
    private readonly _courselistService: CourseManagementService,
    @Inject(MAT_DIALOG_DATA) public addCourses: AddCourse) { }
    
  ngOnInit() {
  }

  public updateCourse(): void {
    this.courseMap.courseMasterId=this.addCourses.courseMasterId;
    this.courseMap.courseName=this.addCourses.courseName;
    this.courseMap.weprovide=this.addCourses.weprovide;
    this.courseMap.abtCourse=this.addCourses.abtCourse;
    this.courseMap.price=this.addCourses.price;
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
