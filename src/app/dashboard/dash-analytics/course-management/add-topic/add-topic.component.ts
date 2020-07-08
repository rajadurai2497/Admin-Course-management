import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AllCourse, AddChapter, ChapterEntity, SlideEntity } from 'src/app/models/course-management.model';
import { CourseManagementService } from 'src/app/services/course-management.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})

export class AddTopicComponent implements OnInit {

  @Input() chapter: ChapterEntity;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  chapterMap:AddChapter=new AddChapter();
  constructor(private readonly _courseManagementService: CourseManagementService) { }
  

  ngOnInit() {
   
  }
  
  // public addChapter(): void {
  //   this.chapter.chapterEntityObj.courseMasterId = this.course.courseMasterId;
    
  //   this._courseManagementService.addTopic(this.chapter).then((data) => {
  //     if (data && data.result) {
  //       alert('Chapter added successfully...!')
  //       this.isDetailsExit.emit(true)
  //     }
  //     else{
  //       alert('Unable to add chapter ')
  //     }
  //   });
  // }
  

  public updateChapter(): void {
    this.chapterMap.courseMasterId=this.chapter.courseMasterId;
    this.chapterMap.chapterEntityObj=new ChapterEntity()
    this.chapterMap.chapterEntityObj.chapterName=this.chapter.chapterName;
    this.chapterMap.chapterEntityObj.chapterId=this.chapter.chapterId;
    this.chapterMap.chapterEntityObj.courseMasterId=this.chapter.courseMasterId;
    this._courseManagementService.updateChapter(this.chapterMap).then((data) => {
      if (data && data.result) {
        this.isDetailsExit.emit(true)
        alert('Topics Added successfully...!')
      }
      else {
        alert('Unable to Add Topic')
      }
    });
  }
  addTopics() {
    let slide: SlideEntity = new SlideEntity();
    slide.chapterId=this.chapter.chapterId;
    this.chapterMap.slideEntityObj.push(slide);
  }
 
 
}