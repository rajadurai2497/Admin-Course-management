import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CounterService } from 'src/app/services/counter.service';
import { Counter } from 'src/app/models/counter.model';
import { AllCourse } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-add-count',
  templateUrl: './add-count.component.html',
  styleUrls: ['./add-count.component.scss']
})
export class AddCountComponent implements OnInit {
  courseMasterId:number=0;
  count:number=0;
 constructor(public dialogRef: MatDialogRef<AddCountComponent>,
    private readonly _counterService: CounterService,
    @Inject(MAT_DIALOG_DATA) public data: AllCourse[]) { }

  ngOnInit() {
  }
  public addCount(): void {
    this._counterService.addCount(this.courseMasterId,this.count).then((data) => {
      if (data && data.result) {
        this.dialogRef.close(true);
        alert('Count updated successfully...!')
      }
      else {
        alert('Unable to update count')
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
