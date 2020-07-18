import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseManagementService } from 'src/app/services/course-management.service';
import { AllCourse, AddCourse } from 'src/app/models/course-management.model';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';


@Component({
  selector: 'app-add-course-management',
  templateUrl: './add-course-management.component.html',
  styleUrls: ['./add-course-management.component.scss'],
  providers: [CourseManagementService]
})

export class AddCourseManagementComponent implements OnInit {

  adCourse: AddCourse = new AddCourse;
  courseForm: FormGroup;

  addCourses: AllCourse[] = [];
  dataSource = new MatTableDataSource<AllCourse>();


  constructor(public dialogRef: MatDialogRef<AddCourseManagementComponent>,
    private readonly _courseManagementService: CourseManagementService,
    private readonly _validation: ValidationService) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      basicContent: new FormControl(this.adCourse.basicContent, [
        Validators.required,
      ]),
      courseName: new FormControl(this.adCourse.courseName, [
        Validators.required,
      ]),
      abtCourse: new FormControl(this.adCourse.abtCourse, [
        Validators.required,]),
      weprovide: new FormControl(this.adCourse.weprovide, [
        Validators.required,
      ]),
      dicountAmount: new FormControl(this.adCourse.weprovide, [
        Validators.required,
      ]),
      price: new FormControl(this.adCourse.price, [
        Validators.required,
      ]),
    });
  }

  get basicContent() { return this.courseForm.get('tbasicContent'); }
  get courseName() { return this.courseForm.get('courseName'); }
  get weprovide() { return this.courseForm.get('weprovide'); }
  get price() { return this.courseForm.get('price'); }
  get abtCourse() { return this.courseForm.get('abtCourse'); }
  get dicountAmount() { return this.courseForm.get('dicountAmount'); }

  public addCourse(): void {
    let course = {
      courseMasterId: 0,
      courseName: this.adCourse.courseName,
      courseAmount: this.adCourse.price,
      description: this.adCourse.abtCourse,
      provideWhat: this.adCourse.weprovide,
      dicountAmount: this.adCourse.dicountAmount
    }
    course.courseAmount = course.courseAmount ? parseInt(course.courseAmount + "") : 0;
    course.dicountAmount = course.dicountAmount ? parseInt(course.dicountAmount + "") : 0;
    if (this.validationaddCourse()) {
      this._courseManagementService.addCourse(course).then((data) => {
        if (data && data.result) {
          this.dialogRef.close(true);
          alert('Course added successfully...!')
        }
        else {
          alert('Unable to add Course')
        }
      });
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  validationaddCourse() {
    if (!this._validation.isAlphaNumeric(this.adCourse.price)) {
      alert('accept number only');
      return false;
    }
    if (!this.adCourse.courseName) {
      alert('Course Name field empty');
      return false;
    }
    if (!this.adCourse.abtCourse) {
      alert('About Course field empty');
      return false;
    }
    if (!this.adCourse.weprovide) {
      alert('What We Provide field empty');
      return false;
    }
    if (!this.adCourse.price) {
      alert('price field empty');
      return false;
    }

    return true;
  }


}
