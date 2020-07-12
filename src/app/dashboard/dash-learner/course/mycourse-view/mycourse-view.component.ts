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
  @Input() chapter: any;
  slideAttachmentdata: any[] = [];
  videoUrl: any = '';
  description: any = '';
  slideName: any = '';
  slideAttachment: any = '';
  currentIndex = 0;
  slideId: number = 0;
  constructor(private readonly _userMycourseService: UserMycourseService, public sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.setCurrentSlide();
    console.log(this.chapter)
  }

  ngOnChanges() {
    this.setCurrentSlide();
  }

  setCurrentSlide() {
    if (this.currentIndex == this.courseTopicList.purchasedSlideList.length) {
      this.isDetailsExit.emit(true);
    } else {
      if (this.courseTopicList.purchasedSlideList[this.currentIndex] && this.courseTopicList.purchasedSlideList[this.currentIndex].videoUrl)
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[this.currentIndex].videoUrl);
      this.description = this.courseTopicList.purchasedSlideList[this.currentIndex].description;
      this.slideName = this.courseTopicList.purchasedSlideList[this.currentIndex].slideName;
      this.slideAttachment = this.courseTopicList.purchasedSlideList[this.currentIndex].virtualPath;
      this.slideId = this.courseTopicList.purchasedSlideList[this.currentIndex].slideId;
    }
  }

  onSlideClick(slide) {
    if (slide.slideId == this.slideId) {
      return;
    } else {
      this.currentIndex = this.courseTopicList.purchasedSlideList.indexOf(slide);
      if (slide && slide.videoUrl)
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideList[this.currentIndex].videoUrl);
      this.description = slide.description;
      this.slideName = slide.slideName;
      this.slideAttachment = slide.virtualPath;
      this.slideId = slide.slideId;
    }
  }

}
