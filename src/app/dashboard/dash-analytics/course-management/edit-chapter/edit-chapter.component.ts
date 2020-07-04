import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.scss']
})
export class EditChapterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditChapterComponent>){}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
