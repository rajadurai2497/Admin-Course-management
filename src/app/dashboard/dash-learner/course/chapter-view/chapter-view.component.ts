import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserMycourseService } from 'src/app/services/user-mycourse.service';

import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.scss'],
})
export class ChapterViewComponent implements OnInit {
  isShowChapter = false;
  courseTopicList: any;
  currentChapter: any;

  @Input() courseChapterList: any[];

  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  displayedColumns: string[] = ['markCompleted', 'position', 'chaptername', 'action'];

  gotodetails(chapter) {
    this._userMycourseService.getSlideByChapter(chapter.chapterId).then((data) => {
      this.courseTopicList = data;
      if (this.courseTopicList && this.courseTopicList.purchasedSlideList.length > 0)
      {
        this.isShowChapter = true;
        this.currentChapter=chapter
      }  
    });
  }

  updateAllComplete(chapterId) {
    this._userMycourseService.completedChapterCheckbox(chapterId)
    console.log(chapterId)
  }

  constructor(private readonly _userMycourseService: UserMycourseService) { }

  ngOnInit() {

  }
}