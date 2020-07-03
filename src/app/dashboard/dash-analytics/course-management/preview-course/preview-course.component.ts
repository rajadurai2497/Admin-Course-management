import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-preview-course',
  templateUrl: './preview-course.component.html',
  styleUrls: ['./preview-course.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PreviewCourseComponent implements OnInit {
  @Input() course:AllCourse;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  isViewDetails=false;
  isChapterDetails=false;
  isEditTopic=false


  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id','chaptername'];
  expandedElement: PeriodicElement | null;


  gotodetails(){
    this.isViewDetails=true;
  }

  gotochapter(){
    this.isChapterDetails=true;
  }

  
  constructor() { }

  ngOnInit() {
    console.log(this.course)
    
  }
  
}

export interface PeriodicElement {
  id:number
  chaptername: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    chaptername:"Oops concept"
  }, {
    id: 2,
    chaptername:"digital Marketting"
  }
];




