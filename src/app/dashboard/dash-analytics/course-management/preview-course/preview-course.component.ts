import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-preview-course',
  templateUrl: './preview-course.component.html',
  styleUrls: ['./preview-course.component.scss']
})
export class PreviewCourseComponent implements OnInit {
  isViewDetails=false;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  gotodetails(){
    this.isViewDetails=true;
  }
  constructor() { }

  ngOnInit() {
  }
  
}
