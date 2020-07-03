import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {

      
  isShowDetails=false;
  constructor() { }

  displayedColumns: string[] = ['coursename', 'totalchapters', 'completedchapters', 'pendingchapters'];
  dataSource = ELEMENT_DATA;


  ngOnInit() {
    
  }


  gotodetails(){
    this.isShowDetails=true;
  }

}


export interface PeriodicElement {
  coursename: string;
  totalchapters: string;
  completedchapters: string;
  pendingchapters: string;
}

// <th>Course Name</th>
// <th>Total Chapters</th>
// <th>Completed Chapters</th>
// <th>Pending Chapters</th>

const ELEMENT_DATA: PeriodicElement[] = [

  {coursename:'oops',totalchapters:'12',completedchapters:'21',pendingchapters:'21'},
];