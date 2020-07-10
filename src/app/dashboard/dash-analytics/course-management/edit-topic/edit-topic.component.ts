import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { SlideEntity, AddChapter, ChapterEntity } from 'src/app/models/course-management.model';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  @Input() topic: SlideEntity;
  @Input() chapter: ChapterEntity;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  chapterMap:AddChapter=new AddChapter();


  constructor(private readonly _courselistService: CourseManagementService) { }

  ngOnInit() {
    console.log(this.topic)
  }



  public updateChapter(): void {
    this.chapterMap.courseMasterId=this.chapter.courseMasterId;
    this.chapterMap.chapterEntityObj=new ChapterEntity()
    this.chapterMap.chapterEntityObj.chapterName=this.chapter.chapterName;
    this.chapterMap.chapterEntityObj.chapterId=this.chapter.chapterId;
    this.chapterMap.chapterEntityObj.courseMasterId=this.chapter.courseMasterId;
    this.chapterMap.slideEntityObj=[];
    this.chapterMap.slideEntityObj.push(this.topic)
    this._courselistService.updateChapter(this.chapterMap).then((data) => {
      if (data && data.result) {
        this.isDetailsExit.emit(true)
        alert('Topic updated successfully...!')
      }
      else {
        alert('Unable to Update Topic')
      }
    });
  }

}
