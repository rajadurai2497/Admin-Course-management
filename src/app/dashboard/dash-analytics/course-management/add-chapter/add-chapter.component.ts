import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AllCourse, AddChapter, SlideEntity, ChapterEntity } from 'src/app/models/course-management.model';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent implements OnInit {

  @Input() course: AllCourse;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  chapter: AddChapter = new AddChapter();
  constructor(private readonly _courseManagementService: CourseManagementService) { }

  ngOnInit() {
    this.chapter.chapterEntityObj = new ChapterEntity();
  }
  
  public addChapter(): void {
    if(this.validateAddChapter()){
    this.chapter.chapterEntityObj.courseMasterId = this.course.courseMasterId;
    console.log(this.chapter)
    this._courseManagementService.addChapter(this.chapter).then((data) => {
      if (data && data.result) {
        alert('Chapter added successfully...!')
        this.isDetailsExit.emit(true)
      }
      else{
        alert('Unable to add chapter ')
      }
    });
  }
  }

  addTopic() {
    let slide: SlideEntity = new SlideEntity();
    this.chapter.slideEntityObj.push(slide);
  }
  validateAddChapter(){
    if(!this.chapter.chapterEntityObj.chapterName){
        alert('Enter chapter name');
        return false;
    }
    if(!this.chapter.chapterEntityObj.orderNo){
      alert('Enter Order Number');
      return false;
  }
//   if(isNaN(parseInt(this.chapter.chapterEntityObj.orderNo))){
//     alert('Enter a Valid Order Number');
//     return false;
// }
// this.chapter.chapterEntityObj.orderNo= parseInt(this.chapter.chapterEntityObj.orderNo);
// this.chapter.slideEntityOb.forEach(slide => {
//   if (!slide.slideName){
//     alert('Enter Topic Name');
//     return false;
//   }
//   if (!slide.videoUrl){
//     alert('Enter Video URL')
//     return false;
//   }

// });
    return true;
  }
}
