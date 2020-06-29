import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-chapter',
  templateUrl: './add-chapter.component.html',
  styleUrls: ['./add-chapter.component.scss']
})
export class AddChapterComponent implements OnInit {
  topicList: any[] = [];

  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  addTopic() {
    const topicMap = {
      name: "",
      link:"",
      description: ""     
    }
    this.topicList.push(topicMap);
  }

}
