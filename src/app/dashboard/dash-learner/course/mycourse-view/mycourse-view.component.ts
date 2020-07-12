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
  @Input() courseChapterList: any;
  slideAttachmentdata: any[] = [];
  videoUrl: any = '';
  description: any = '';
  slideName: any = '';
  slideAttachment: any = '';
  currentIndex = 0;
  constructor(private readonly _userMycourseService: UserMycourseService, public sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.setCurrentSlide();
    console.log(this.courseChapterList)
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
    }
  }

  onSlideClick(item) {
    window.open(item,'_blank')

  }

}