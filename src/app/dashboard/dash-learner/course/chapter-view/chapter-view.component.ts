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
  courseTopicList: any[] = [];

  @Input() courseChapterList: any[];

  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();

  displayedColumns: string[] = ['markCompleted','position', 'chaptername', 'action'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // selection = new SelectionModel<PeriodicElement>(true, []);

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }
  gotodetails(ChapterId) {
    this._userMycourseService.getSlideByChapter(ChapterId).then((data) => {
      this.courseTopicList = data;
      console.log(data);
    });
    this.isShowChapter = true;
  }

  updateAllComplete(chapterId){
    this._userMycourseService.completedChapterCheckbox(chapterId)
    console.log(chapterId)
  }

//   yourfunc(e) {
//     console.log(e)
//     if(e.target.checked){        
//     }
//  }

  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }
  constructor(private readonly _userMycourseService: UserMycourseService) {}

  ngOnInit() {
    // this.getCourseChapterList(courseMasterId);
  }
}
