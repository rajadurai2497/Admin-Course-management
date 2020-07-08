import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-mycourse-view',
  templateUrl: './mycourse-view.component.html',
  styleUrls: ['./mycourse-view.component.scss'],
})
export class MycourseViewComponent implements OnInit {
  url: SafeResourceUrl;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() courseTopicList: any;
  videoUrl: any = '';
  description: any = '';
  slideName: any = '';
  count: number = 1;

  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit() {
  }

  ngOnChanges() {
    var i = 0;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[i].videoUrl);
    this.description = this.courseTopicList.purchasedSlideList[i].description;
    this.slideName = this.courseTopicList.purchasedSlideList[i].slideName;
  }

  public nextVideo(): void {
    let i = this.count++;
    console.log("i-", i)
    var j = (this.courseTopicList.purchasedSlideList.length);
    console.log("len", this.courseTopicList.purchasedSlideList)
    if (i < j) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[i].videoUrl);
      this.description = this.courseTopicList.purchasedSlideList[i].description;
      this.slideName = this.courseTopicList.purchasedSlideList[i].slideName;
      console.log(this.slideName)
    }

  }





  public onSlideClick(item: any): void {
    this.videoUrl = item.videoUrl;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log(this.videoUrl)
    this.description = item.slideDescription;
    this.slideName = item.slideName
    // if (item.videoUrl != null && item.slideDescription != null) {
    //   this.videoUrl = item.videoUrl;
    //   console.log(this.videoUrl)
    //   this.description = item.slideDescription;
    // } else {
    //   (this.videoUrl = ''), (this.description = '');
    // }
  }
}
