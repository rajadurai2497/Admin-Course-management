import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {
isShowDetails=false;
  constructor() { }

  ngOnInit() {
  }
  gotodetails(){
    this.isShowDetails=true;
  }

}
