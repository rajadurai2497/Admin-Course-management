import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycourse-view',
  templateUrl: './mycourse-view.component.html',
  styleUrls: ['./mycourse-view.component.scss']
})
export class MycourseViewComponent implements OnInit {
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}


