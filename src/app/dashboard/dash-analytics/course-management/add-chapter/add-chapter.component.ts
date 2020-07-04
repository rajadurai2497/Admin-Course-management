import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { browser } from 'protractor';
import { AllCourse } from 'src/app/models/course-management.model';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent implements OnInit {
  topicList: any[] = [];
  @Input() course:AllCourse;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  courseName: string;
  constructor() { }

  ngOnInit() {
  }
  addTopic() {
    const topicMap = {
      name: "",
      link:"",
      description: "",   
      browse:""  
    }
    this.topicList.push(topicMap);
  }

}
