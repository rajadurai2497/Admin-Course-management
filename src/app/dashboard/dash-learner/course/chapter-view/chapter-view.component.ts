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

  @Input() courseChapterList: any[];

  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  displayedColumns: string[] = ['markCompleted', 'position', 'chaptername', 'action'];

  gotodetails(ChapterId) {
    this._userMycourseService.getSlideByChapter(ChapterId).then((data) => {
      this.courseTopicList = data;
      if (this.courseTopicList && this.courseTopicList.purchasedSlideList.length > 0)
        this.isShowChapter = true;
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