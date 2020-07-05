import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-mycourse-view',
  templateUrl: './mycourse-view.component.html',
  styleUrls: ['./mycourse-view.component.scss'],
})
export class MycourseViewComponent implements OnInit {

  @Input() courseTopicList: any[];
  videoUrl: '';


  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() courseTopicList: any;
  videoUrl: any = '';
  description: any = '';
  constructor() {}

  ngOnInit() {}

  public onSlideClick(item: any): void {
    if (item.videoUrl != null && item.slideDescription != null) {
      this.videoUrl = item.videoUrl;
      this.description = item.slideDescription;
    } else {
      (this.videoUrl = ''), (this.description = '');
    }
  }
}
