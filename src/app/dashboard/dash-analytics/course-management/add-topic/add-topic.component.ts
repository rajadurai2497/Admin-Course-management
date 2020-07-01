import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  topicsList: any[] = [];

  constructor() { }

  ngOnInit() {
  }
  addTopics() {
    const topicMap = {
      name: "",
      link: "",
      description: "",
      browse: ""
    }
    this.topicsList.push(topicMap);
  }

}
