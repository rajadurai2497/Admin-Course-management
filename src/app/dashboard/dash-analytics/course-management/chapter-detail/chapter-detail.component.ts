import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditChapterComponent } from '../edit-chapter/edit-chapter.component';

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
  
  constructor(private dialog:MatDialog) { }
  
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

}
