import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse } from 'src/app/models/course-management.model';


@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
  providers: [MatDialog]
})
export class CourseManagementComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  isShowDetails = false;
  allCourse: AllCourse[] = [];
  dataSource = new MatTableDataSource<AllCourse>();
  displayedColumns: string[];
  courseMasterId: string;
  currentCourse: AllCourse;

  constructor(private dialog: MatDialog, private readonly _courselistService: CourseManagementService) { }

  ngOnInit(): void {
    this.displayedColumns = ['courseMasterId', 'courseName', 'courseAmount', 'leanresnumber', 'actions', 'delete'];
    this.getAllCourselist();
  }

  gotodetails(course) {
    this.currentCourse = course;
    this.isShowDetails = true;
  }
  addCourse() {
    let dialogRef = this.dialog.open(AddCourseManagementComponent, {
      height: '500px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllCourselist();
      }
    });
  }

  public getAllCourselist(): void {
    this._courselistService.getAllCourselist().then((data) => {
      if (data && data.result) {
        this.allCourse = data.allCourse;
        this.dataSource = new MatTableDataSource<AllCourse>(this.allCourse);
        this.dataSource.paginator = this.paginator;
      }
    });
  }


  deleteCourse(course): void {
    if(confirm('Are you sure you want to delete this course?'))
    this._courselistService.deleteCourse(course.courseMasterId).then((data) => {
      if (data && data.result) {
        this.getAllCourselist();
        alert("Course deleted Successfully.....")
      }
      else{
        alert("Unable to delete Course")
      }
    });
  }
}


