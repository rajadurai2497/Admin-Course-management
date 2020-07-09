import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-attachment',
  templateUrl: './add-attachment.component.html',
  styleUrls: ['./add-attachment.component.scss']
})
export class AddAttachmentComponent implements OnInit {
  @ViewChild('fileInput',{static: false}) fileInput: ElementRef;
  @Output()
  isDetailsExit: EventEmitter<boolean> = new EventEmitter<boolean>();
  formData: FormData = new FormData();
  fileList: any[] = [];
  index = 1;
  constructor() { }

  ngOnInit() {
  }
  addFile(input) {
    let files = input.target.files;
    console.log(files)
    Array.prototype.forEach.call(files, file => {
      this.formData.append("file_" + this.index, file);
      this.formData.append("file_" + this.index, file.name);
      let docMap = {
        "fileName": file.name,
        "index": this.index
      }
      this.fileList.push(docMap);
      console.log(docMap)
      this.index++;
    });
    this.fileInput.nativeElement.value = "";
  }
  deleteFile(file) {
    const itemIndex = this.fileList.indexOf(file);
    this.formData.delete("file_" + file.index);
    if (itemIndex != -1) {
        this.fileList.splice(itemIndex, 1);
    }
  }
}
