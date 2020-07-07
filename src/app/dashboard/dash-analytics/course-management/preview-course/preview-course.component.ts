import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse, ChapterEntity } from 'src/app/models/course-management.model';



@Component({
  selector: 'app-preview-course',
  templateUrl: './preview-course.component.html',
  styleUrls: ['./preview-course.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PreviewCourseComponent implements OnInit {
  @Input() course: AllCourse;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  allChapter: ChapterEntity[];
  displayedColumns: string[];
  

  isViewDetails = false;
  isChapterDetails = false;
  isEditTopic = false
  dataSource = new MatTableDataSource<ChapterEntity>();


  // dataSource = ELEMENT_DATA;
  // columnsToDisplay = ['id', 'chaptername'];
  expandedElement: ChapterEntity | null;


  gotodetails() {
    this.isViewDetails = true;
  }

  gotochapter() {
    this.isChapterDetails = true;
  }


  constructor(private readonly _courseManagementService: CourseManagementService) { }

  ngOnInit() {
    console.log(this.course)
    this.displayedColumns = ['chapterId', 'chapterName'];
    this.getCourseChapters()

  }

  getChaptersList() {
    this._courseManagementService.getCourseChapters(this.course.courseMasterId).then(data => {
      if (data && data.result) {

      }
      console.log(data)
    })
  }
  
    public getCourseChapters(): void {
      this._courseManagementService.getCourseChapters(this.course.courseMasterId).then((data) => {
        if (data && data.result) {
          this.allChapter = data.chapterListByCourse;
          this.dataSource = new MatTableDataSource<ChapterEntity>(this.allChapter);
          console.log('my msg',this.dataSource)
        }
      });
    }

}




