import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

export interface ChapterElement {
  id: number;
  chaptername: string;
  topicname: string;
  email: string;
  phonenumber: number;
  paidamount: number;
  paidon: string;
}

@Component({
  selector: 'app-preview-course',
  templateUrl: './preview-course.component.html',
  styleUrls: ['./preview-course.component.scss']
})
export class PreviewCourseComponent implements OnInit {
  isViewDetails=false;

  ELEMENT_DATA: ChapterElement[] = [
    { id: 1, chaptername: 'Hydrogen', topicname: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '22/04/2020' },
    { id: 2, chaptername: 'Hello', topicname: 'c++', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '14/04/2020' },
    { id: 3, chaptername: 'shyam', topicname: 'C', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '11/02/2020' },
    { id: 4, chaptername: 'Man', topicname: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '02/03/2020' },
    { id: 5, chaptername: 'amuthan', topicname: 'Digital', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '20/12/2019' },
    { id: 6, chaptername: 'kavitha', topicname: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '25/11/2019' },
    { id: 7, chaptername: 'Hydro', topicname: 'java', email: 'kavi@gmail', phonenumber: 907856435673, paidamount: 500, paidon: '26/12/2019' },
  ];


  
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  gotodetails(){
    this.isViewDetails=true;
  }
  constructor() { }

  ngOnInit() {
  }
  
}
