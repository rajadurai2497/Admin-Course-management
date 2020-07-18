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
  }

  ngOnChanges() {
    this.setCurrentSlide();
  }

  setCurrentSlide() {
    if (this.currentIndex == this.courseTopicList.purchasedSlideListWithAttachement.length) {
      this.isDetailsExit.emit(true);
    } else {
      if (this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex] && this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].videoUrl)
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].videoUrl);
      this.description = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideDescription;
      this.slideName = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideName;
      this.slideAttachment = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideAndAttachementEntityList;
      this.slideId = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideId;
    }
  }

  downloadAttach(attachment) {
    window.open(attachment,"_blank")
  }

  onSlideClick(slide) {
    if (slide.slideId == this.slideId) {
      return;
    } else {
      this.currentIndex = this.courseTopicList.purchasedSlideListWithAttachement.indexOf(slide);
      if (slide && slide.videoUrl)
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].videoUrl);
      this.description = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideDescription;
      this.slideName = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideName;
      this.slideAttachment = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideAndAttachementEntityList;
      this.slideId = this.courseTopicList.purchasedSlideListWithAttachement[this.currentIndex].slideId;
    }
  }

}
