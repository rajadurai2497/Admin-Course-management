import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse } from 'src/app/models/course-management.model';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-add-course-management',
  templateUrl: './add-course-management.component.html',
  styleUrls: ['./add-course-management.component.scss'],
  providers: [CourseManagementService]
})

export class AddCourseManagementComponent implements OnInit {

  basicContent: string;
  courseName: string;
  abtCourse: string;
  weprovide: string;
  price: number;

  displayedColumns: string[];
  addCourses: AllCourse[] = [];
  dataSource = new MatTableDataSource<AllCourse>();


  constructor(public dialogRef: MatDialogRef<AddCourseManagementComponent>,
     private readonly _courseManagementService: CourseManagementService) { }

  ngOnInit(): void {
    this.displayedColumns = ['courseMasterId', 'courseName', 'courseAmount', 'description', 'provideWhat'];
    this.addCourse();
  }

  public addCourse(): void {
    const course = {
      courseMasterId: 0,
      courseName: this.courseName,
      courseAmount: this.price,
      description: this.abtCourse,
      provideWhat: this.weprovide
    }
    this._courseManagementService.addCourse(course).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(true);
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
