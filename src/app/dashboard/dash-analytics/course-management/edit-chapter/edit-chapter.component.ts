import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { ChapterEntity, AddChapter } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss']
})
export class EditChapterComponent implements OnInit {
  
  
  chapterMap:AddChapter=new AddChapter();

  constructor(
    public dialogRef: MatDialogRef<EditChapterComponent>, 
    private readonly _courselistService: CourseManagementService,
    @Inject(MAT_DIALOG_DATA) public chapter: ChapterEntity) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  public updateChapter(): void {
    this.chapterMap.courseMasterId=this.chapter.courseMasterId;
    this.chapterMap.chapterEntityObj=new ChapterEntity()
    this.chapterMap.chapterEntityObj.chapterName=this.chapter.chapterName;
    this.chapterMap.chapterEntityObj.chapterId=this.chapter.chapterId;
    this.chapterMap.chapterEntityObj.courseMasterId=this.chapter.courseMasterId;
    this.chapterMap.chapterEntityObj.orderNo=this.chapter.orderNo;
    this._courselistService.updateChapter(this.chapterMap).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(data.saveResult);
        alert('Chapter name updated successfully...!')
      }
      else {
        alert('Unable to Update Chapter')
      }
    });
  }

}

