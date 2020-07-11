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
  slideAttachmentdata:any[]=[];
  videoUrl: any = '';
  description: any = '';
  slideName: any = '';
  slideAttachment:any='';
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
    this.slideAttachment= this.courseTopicList.purchasedSlideList[i].virtualPath;
    console.log("slide id",this.courseTopicList.purchasedSlideList[i].slideId);
    // this.getAttachmentSlide(this.courseTopicList.purchasedSlideList[i].slideId);
  }

  public nextVideo(): void {
    let i = this.count++;
    console.log("i-", i)
    var j = (this.courseTopicList.purchasedSlideList.length);
    if (i < j) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[i].videoUrl);
      this.description = this.courseTopicList.purchasedSlideList[i].description;
      this.slideName = this.courseTopicList.purchasedSlideList[i].slideName;
      this.slideAttachment= this.courseTopicList.purchasedSlideList[i].virtualPath;
    }
  }

  public backVideo(): void {
    let i = this.count--;
    var j = (this.courseTopicList.purchasedSlideList.length);
    console.log('hello',this.courseTopicList)
    if (i < j) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[i].videoUrl);
      this.description = this.courseTopicList.purchasedSlideList[i].description;
      this.slideName = this.courseTopicList.purchasedSlideList[i].slideName;
      this.slideAttachment= this.courseTopicList.purchasedSlideList[i].virtualPath;
    }
  }

  public onSlideClick(item: any): void {
    this.videoUrl = item.videoUrl;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.description = item.slideDescription;
    this.slideName = item.slideName;
    this.slideAttachment=item.virtualPath
    // this.getAttachmentSlide(item.slideId);
    // if (item.videoUrl != null && item.slideDescription != null) {
    //   this.videoUrl = item.videoUrl;
    //   console.log(this.videoUrl)
    //   this.description = item.slideDescription;
    // } else {
    //   (this.videoUrl = ''), (this.description = '');
    // }
  }

  // getAttachmentSlide(slideAttachmentId):void{
  //   console.log(slideAttachmentId)
  //   this._userMycourseService.getAttachmentSlide(slideAttachmentId).then((data) => {
  //     // this.slideAttachmentdata = data;
  //     console.log(data);
  //   });
  // }
}
