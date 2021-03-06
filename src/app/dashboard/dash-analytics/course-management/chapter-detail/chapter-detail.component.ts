import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditChapterComponent } from '../edit-chapter/edit-chapter.component';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { ChapterEntity, SlideEntity } from 'src/app/models/course-management.model';
import { DomSanitizer } from '@angular/platform-browser';
import { AddAttachmentComponent } from '../add-attachment/add-attachment.component';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { data } from 'jquery';
import { ROUTE_CONFIG } from 'src/app/models/constant';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss']
})
export class ChapterDetailComponent implements OnInit {
  @Input() chapter: ChapterEntity;
  topic: SlideEntity;
  isEditTopic = false;
  isAddTopic = false;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  dialogRef: any;

  constructor(private dialog: MatDialog,
    private readonly _courselistService: CourseManagementService,
    private readonly _fileUploadService: FileUploadService,
    private sanitizer: DomSanitizer) { }

  edittopic(slide) {
    this.isEditTopic = true;
    this.topic = slide;
  }
  editChapter() {
    let dialogRef = this.dialog.open(EditChapterComponent, {
      height: '300px',
      width: '500px',
      data: this.chapter
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getChapterDetails();
      }
    });
  }

  addtopic(slide) {
    this.isAddTopic = true;
  }
  addAttachment(slide) {
    let dialogRef = this.dialog.open(AddAttachmentComponent, {
      height: '500px',
      width: '500px',
      data: slide
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getChapterDetails();
      }
    });
  }

  ngOnInit() {
    this.chapter.slides.forEach(slide => {
      this.fileShow(slide)
    });
  }
  fileShow(slide: SlideEntity): void {
    // slide.slideAttachments = [];
    this._fileUploadService.fileShow(slide).then((data) => {
      if (data && data.result) {
        slide.slideAttachments = data.slideAttachments;
      }
    });
  }
  deleteChapter(): void {
    if (confirm('Are you sure you want to delete this chapter?'))
      this._courselistService.deleteChapter(this.chapter.chapterId).then((data) => {
        if (data && data.result) {
          alert("Chapter deleted Successfully.....")
          this.isDetailsExit.emit(true)
        }
        else {
          alert("Unable to delete Chapter")
        }
      });
  }

  deleteTopic(topic): void {
    if (confirm('Are you sure you want to delete this topic?'))
      this._courselistService.deleteTopic(topic.slideId).then((data) => {
        if (data && data.result) {
          // this.getAllCourselist();
          alert("Topic deleted Successfully.....")
          this.getChapterDetails();
        }
        else {
          alert("Unable to delete Topic")
        }
      });
  }
  getChapterDetails() {
    this._courselistService.getCourseChapters(this.chapter.courseMasterId, this.chapter.chapterId).then((data) => {
      if (data && data.result) {
        data.chapterListByCourse.forEach(chapter => {
          if (chapter.chapterId == this.chapter.chapterId) {
            this.chapter = chapter;
            this.chapter.slides = [];
            data.slideListByChapter.forEach(slide => {
              if (slide.chapterId = this.chapter.chapterId) {
                this.fileShow(slide);
                this.chapter.slides.push(slide);
              }
            });
          }
        });
      }
    });
  }
  videoUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  deleteAttach(attach) {
    if (confirm('Are you sure you want to delete this topic?')) {
      this._fileUploadService.deleteAttach(attach.chapterSlideAttachementId).then((data) => {
        if (data && data.result) {
          alert('Attachment Delete successfully')
          this.getChapterDetails();
        }
        else {
          alert('unable to delete attachment')
        }
      });
    }
  }
  downloadAttach(attachment) {
    window.open(attachment.virtualPath,"_blank")
  }

}