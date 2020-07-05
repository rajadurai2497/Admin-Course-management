import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchasedCourseDetails } from 'src/app/models/user-mycourse';
import { UserMycourseService } from 'src/app/services/user-mycourse.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss'],
})
export class MycourseComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[];
  public userMycourse: PurchasedCourseDetails[] = [];
  dataSource = new MatTableDataSource<PurchasedCourseDetails>();

  isShowDetails = false;
  courseChapterList: any[] = [];

  constructor(private readonly _userMycourseService: UserMycourseService) {}

  ngOnInit(): void {
    // this.displayedColumns = ['courseName'];pendingChapter: 4, completedChapter: 0, courseMasterId: 1, courseName:
    this.displayedColumns = ['courseName', 'totalChapter', 'completedChapter', 'pendingChapter'];
    this.getPurchasedCourseList();
  }

  public getPurchasedCourseList(): void {
    this._userMycourseService.getPurchasedCourseList().then((data) => {
      if (data && data.result) {
        this.userMycourse = data.chapterCounter;
        console.log(data);
        // console.log(userMycourse);
        this.dataSource = new MatTableDataSource<PurchasedCourseDetails>(this.userMycourse);
        // this.dataSource.paginator = this.paginator;
      }
    });
  }

  gotodetails(courseMasterId) {
    this._userMycourseService.getCourseChapterList(courseMasterId).then((data) => {
      this.courseChapterList = data;
      console.log(data);
    });
    console.log(courseMasterId);
    this.isShowDetails = true;
  }
}
