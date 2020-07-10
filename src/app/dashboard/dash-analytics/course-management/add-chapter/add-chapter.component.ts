import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AllCourse, AddChapter, SlideEntity, ChapterEntity } from 'src/app/models/course-management.model';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(private readonly _courseManagementService: CourseManagementService,
    private readonly _validation: ValidationService,
    private readonly _fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.chapter.chapterEntityObj = new ChapterEntity();
  }

  public addChapter(): void {
    if (this.validateAddChapter()) {
      this.chapter.chapterEntityObj.courseMasterId = this.course.courseMasterId;
      console.log(this.chapter)
      this._courseManagementService.addChapter(this.chapter).then((data) => {
        if (data && data.result) {
          alert('Chapter added successfully...!')
          this.isDetailsExit.emit(true)
        }
        else {
          alert('Unable to add chapter ')
        }
      });
    }
  }

  addTopic() {
    let slide: SlideEntity = new SlideEntity();
    this.chapter.slideEntityObj.push(slide);
  }
  validateAddChapter() {
    if (!this.chapter.chapterEntityObj.chapterName) {
      alert('Enter chapter name');
      return false;
    }
    if (!this.chapter.chapterEntityObj.orderNo) {
      alert('Enter Order Number');
      return false;
    }
    return true;
  }
}
