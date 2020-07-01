import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { AllCourseModel } from 'src/app/models/course-management/courselist.model';
import { CourselistService } from 'src/app/services/course-management/courselist.service';


@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
  providers: [MatDialog]
})
export class CourseManagementComponent implements OnInit {
  isShowDetails = false;


  displayedColumns: string[];
  allCourse: AllCourseModel;

  constructor(private dialog: MatDialog, private readonly _courselistService: CourselistService) { }

  ngOnInit(): void {
    this._initializeValues();
    this._initializeProperties();
    this.getAllCourselist();
  }


  gotodetails() {
    this.isShowDetails = true;
  }
  addCourse() {
    let dialogRef = this.dialog.open(AddCourseManagementComponent, {
      height: '500px',
      width: '800px',
    });
  }

  public getAllCourselist(): void {
    this._courselistService.getAllCourselist().then((data: AllCourseModel) => {
      this.allCourse = data;
    });
  }

  private _initializeValues(): void {
    this.allCourse = {
      allCourse: [],
      result: true,
    };
  }
  private _initializeProperties(): void {
    this.displayedColumns = ['courseMasterId', 'courseName', 'courseAmount','leanresnumber','actions'];
  }
}



