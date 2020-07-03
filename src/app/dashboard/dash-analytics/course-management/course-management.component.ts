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
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 
  isShowDetails = false;
  allCourse: AllCourse[]=[];
  dataSource = new MatTableDataSource<AllCourse>();
  displayedColumns: string[];
  

  constructor(private dialog: MatDialog, private readonly _courselistService: CourseManagementService) { }

  ngOnInit(): void {
    this.displayedColumns = ['courseMasterId', 'courseName', 'courseAmount','leanresnumber','actions'];
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
    this._courselistService.getAllCourselist().then((data) => {
      if(data && data.result){
        this.allCourse = data.allCourse;
        this.dataSource=new MatTableDataSource<AllCourse>(this.allCourse);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
}


