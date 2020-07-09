import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { SlideEntity } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  topic: SlideEntity;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
 

  constructor(private readonly _courselistService: CourseManagementService) { }

  ngOnInit() {
  }
  public updateTopic(): void {
    const currentUser = JSON.parse(localStorage.getItem('topic'));
    this.topic.chapterId=currentUser.userId;
    this._courselistService.updateTopic(this.topic).then((data) => {
      if (data && data.result) {
        alert('Topic name updated successfully...!')
      }
      else{
        alert('Unable to Update Topic')
      }
    });
  }

}
