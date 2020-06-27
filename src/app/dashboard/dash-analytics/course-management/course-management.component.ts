import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseManagementComponent } from './add-course-management/add-course-management.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
  providers:[MatDialog],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CourseManagementComponent implements OnInit {
  
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'coursename', 'email','price', 'learnernumber'];
  expandedElement: PeriodicElement | null;

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
export interface PeriodicElement {
  id: number;
  coursename:string;
  email: string;
  price:number;
  learnernumber:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    coursename:'java',
    email: 'kavi2gmail.com',
    price:700,
    learnernumber:60,
  }, {
    id: 2,
    coursename:'python',
    email: 'gt@gmail.com',
    price:1000,
    learnernumber:20,
  }
];