import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse, ChapterEntity, SlideEntity } from 'src/app/models/course-management.model';
import { DomSanitizer } from '@angular/platform-browser';



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
  isEditTopic = false;
  dataSource = new MatTableDataSource<ChapterEntity>();
  currentChapter: ChapterEntity;

  // dataSource = ELEMENT_DATA;
  // columnsToDisplay = ['id', 'chaptername'];
  expandedElement: ChapterEntity | null;


  gotodetails() {
    this.isViewDetails = true;
  }

  gotochapter(chapter) {
    this.isChapterDetails = true;
    this.currentChapter = chapter;
  }


  constructor(private readonly _courseManagementService: CourseManagementService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.displayedColumns = ['chapterId', 'chapterName','actions'];
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
        this.allChapter.forEach(chapter => {
          chapter.slides = [];
          data.slideListByChapter.forEach(slide => {
            if (slide.chapterId == chapter.chapterId) {
              chapter.slides.push(slide);
            }
          });
        });
        this.dataSource = new MatTableDataSource<ChapterEntity>(this.allChapter);
      }
    });
  }
  textValue(text){
    return this.sanitizer.bypassSecurityTrustResourceUrl(text)
  }

}




