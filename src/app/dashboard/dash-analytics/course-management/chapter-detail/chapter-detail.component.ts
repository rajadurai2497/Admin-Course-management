import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditChapterComponent } from '../edit-chapter/edit-chapter.component';
import { CourseManagementService } from 'src/app/services/course-management.service';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.scss']
})
export class ChapterDetailComponent implements OnInit {
  isEditTopic=false;
  isAddTopic=false;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  dialogRef: any;
  
  constructor(private dialog:MatDialog,private readonly _courselistService: CourseManagementService) { }
  
  edittopic(){
    this.isEditTopic=true;
  }
  editChapter(){
    let dialogRef = this.dialog.open(EditChapterComponent, {
      height: '300px',
      width: '500px',
    });
  }
  
  addtopic(){
    this.isAddTopic=true;
  }

  ngOnInit() {
  }

  deleteChapter(chapter): void {
    if(confirm('Are you sure you want to delete this course?'))
    this._courselistService.deleteCourse(chapter.courseMasterId).then((data) => {
      if (data && data.result) {
        // this.getAllCourselist();
        alert("Chapter deleted Successfully.....")
      }
      else{
        alert("Unable to delete Chapter")
      }
    });
  }

  deleteTopic(topic): void {
    if(confirm('Are you sure you want to delete this course?'))
    this._courselistService.deleteCourse(topic.courseMasterId).then((data) => {
      if (data && data.result) {
        // this.getAllCourselist();
        alert("Topic deleted Successfully.....")
      }
      else{
        alert("Unable to delete Topic")
      }
    });
  }

}
