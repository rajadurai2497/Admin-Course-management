import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

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
  isViewDetails=false;
  isChapterDetails=false;


  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'chaptername'];
  expandedElement: ChapterElement | null;


  
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  gotodetails(){
    this.isViewDetails=true;
  }

  gotochapter(){
    this.isChapterDetails=true;
  }
  constructor() { }

  ngOnInit() {
  }
  
}
export interface ChapterElement {
  id: number;
  chaptername:string;
}
const ELEMENT_DATA: ChapterElement[] = [
  { id: 1, chaptername: 'python'},
  { id: 2, chaptername: 'java' },
  { id: 3, chaptername: 'C++' },
  { id: 4, chaptername: 'C' },
  { id: 5, chaptername: 'Digital Marketing'},
  { id: 6, chaptername: 'Digital Analysis' },
  { id: 7, chaptername: 'Marketing'},
];


