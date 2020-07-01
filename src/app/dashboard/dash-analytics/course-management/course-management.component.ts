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
  isShowDetails=false;
    displayedColumns: string[] = ['id', 'coursename','price', 'learnernumber','actions'];
    dataSource = ELEMENT_DATA;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  gotodetails(){
    this.isShowDetails=true;
  }
  addCourse(){
    let dialogRef = this.dialog.open(AddCourseManagementComponent, {
      height: '500px',
      width: '800px',
    });
  }

}

export interface PeriodicElement {
  id: number;
    coursename:string;
    price:number;
    learnernumber:number
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
    id: 1,
    coursename:'java',
    price:700,
    learnernumber:60,
  }, {
    id: 2,
    coursename:'python',
    price:1000,
    learnernumber:20,
  }
];
