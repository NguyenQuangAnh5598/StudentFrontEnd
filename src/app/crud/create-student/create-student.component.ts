import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/Student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  form: any = {};
  student: Student;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

createStudent() {
    this.student = new Student(
      this.form.name,
      this.form.dOB,
      this.form.avatar
    )
  this.studentService.createStudent(this.form).subscribe();
}

  onUploadAvatar($event) {
    this.form.avatar = $event;
  }
}
