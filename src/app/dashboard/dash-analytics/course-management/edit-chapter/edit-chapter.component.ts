import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { ChapterEntity } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss']
})
export class EditChapterComponent implements OnInit {
  @Input() chapter: ChapterEntity;
  constructor(
    public dialogRef: MatDialogRef<EditChapterComponent>,private readonly _courselistService: CourseManagementService){}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }
  public updateChapter(): void {
    const currentUser = JSON.parse(localStorage.getItem('chapter'));
    this.chapter.chapterId=currentUser.userId;
    this._courselistService.updateChapter(this.chapter).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(data.saveResult);
        alert('Chapter name updated successfully...!')
      }
      else{
        alert('Unable to Update Chapter')
      }
    });
  }

}
