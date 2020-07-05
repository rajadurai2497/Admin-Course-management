import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AllCourse, AddChapter, SlideEntity, ChapterEntity } from 'src/app/models/course-management.model';
import { CourseManagementService } from 'src/app/services/course-management.service';

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
    this.chapter.chapterEntityObj.courseMasterId = this.course.courseMasterId;
    this._courseManagementService.addChapter(this.chapter).then((data) => {
      if (data && data.result) {
        alert('Chapter added successfully...!')
      }
    });
  }


  addTopic() {
    let slide: SlideEntity = new SlideEntity();
    this.chapter.slideEntityOb.push(slide);
  }

}
