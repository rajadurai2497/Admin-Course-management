import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mycourse-view',
  templateUrl: './mycourse-view.component.html',
  styleUrls: ['./mycourse-view.component.scss']
})
export class MycourseViewComponent implements OnInit {

  @Input() courseTopicList: any[];
  videoUrl: '';


  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }


  public setSlide(item): void {
    console.log(item);

    // this.videoUrl : [item.videoURl];


  }
}


