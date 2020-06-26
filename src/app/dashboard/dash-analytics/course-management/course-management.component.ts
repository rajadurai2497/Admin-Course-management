import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
  providers:[MatDialog]
})
export class CourseManagementComponent implements OnInit {
  

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  addCourse(){
    let dialogRef = this.dialog.open(AddCourseManagementComponent, {
      height: '500px',
      width: '600px',
    });
  }

}
