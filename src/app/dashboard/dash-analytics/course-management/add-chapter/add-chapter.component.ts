import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { browser } from 'protractor';
import { AllCourse, AddChapter, SlideEntityOb } from 'src/app/models/course-management.model';
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
  chapter: AddChapter;
  constructor(private readonly _courseManagementService: CourseManagementService) { }

  ngOnInit() {
    // this.chapter.slideEntityOb = [];
  }

  public addChapter(): void {

    this._courseManagementService.addChapter(this.chapter).then((data) => {
      if (data && data.result) {
        alert('Chapter added successfully...!')
      }
    });
  }


  addTopic() {
    let topicMap: SlideEntityOb;
    topicMap.chapterId='';
    topicMap.slideId='';
    topicMap.videoUrl='';
    topicMap.slideName='';
    this.chapter.slideEntityOb.push(topicMap);
  }

}
