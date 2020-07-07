import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-mycourse-view',
  templateUrl: './mycourse-view.component.html',
  styleUrls: ['./mycourse-view.component.scss'],
})
export class MycourseViewComponent implements OnInit {

  // @Input() courseTopicList: any[];
  // videoUrl: '';

  url: SafeResourceUrl;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() courseTopicList: any;
  videoUrl: any = 'purchasedSlideList.array(0).videoUrl';
  description:any='purchasedSlideList.array(0).description';


  // videoUrl: any = '';
  // description: any = '';
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    // for(var i=0;i<this.courseTopicList.length;i++ ){
    //   this.courseTopicList[i].isChecked=false;
    //             console.log(this.courseTopicList[i].isChecked)

    // }git pull origin master



    // this.description=this.courseTopicList.purchasedSlideList.array(0).description;
    // console.log(this.description);
    // this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList.array(0).videoUrl);
    // console.log( this.url);
    // this.description =this.courseTopicList.purchasedSlideList.array(0).description
   }

  public onSlideClick(item: any): void {
    this.videoUrl = item.videoUrl;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log(this.videoUrl)
    this.description = item.slideDescription;
    // if (item.videoUrl != null && item.slideDescription != null) {
    //   this.videoUrl = item.videoUrl;
    //   console.log(this.videoUrl)
    //   this.description = item.slideDescription;
    // } else {
    //   (this.videoUrl = ''), (this.description = '');
    // }
  }
}
