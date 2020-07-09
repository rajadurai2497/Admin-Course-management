import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
import { UserMycourseService } from 'src/app/services/user-mycourse.service';


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

  constructor(private readonly _userMycourseService: UserMycourseService,public sanitizer: DomSanitizer) { }
  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.courseTopicList.purchasedSlideList);
    var i = 0;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[i].videoUrl);
    this.description = this.courseTopicList.purchasedSlideList[i].description;
    this.slideName = this.courseTopicList.purchasedSlideList[i].slideName;
    console.log("slide id",this.courseTopicList.purchasedSlideList[i].slideId);
    this.getAttachmentSlide(this.courseTopicList.purchasedSlideList[i].slideId);
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
      this.getAttachmentSlide(this.courseTopicList.purchasedSlideList[i].slideId);
  
      console.log(this.slideName)
    }
  }

  public onSlideClick(item: any): void {
    this.videoUrl = item.videoUrl;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log(this.videoUrl)
    this.description = item.slideDescription;
    this.slideName = item.slideName;
    this.getAttachmentSlide(item.slideId);
    // if (item.videoUrl != null && item.slideDescription != null) {
    //   this.videoUrl = item.videoUrl;
    //   console.log(this.videoUrl)
    //   this.description = item.slideDescription;
    // } else {
    //   (this.videoUrl = ''), (this.description = '');
    // }
  }

  getAttachmentSlide(slideAttachmentId):void{
    console.log(slideAttachmentId)
    this._userMycourseService.getAttachmentSlide(slideAttachmentId).then((data) => {
      // this.courseChapterList = data;
      console.log(data);
    });

  }


}
