import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../../model/Student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  student: Student;

  constructor(private studentService: StudentService,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(studentId => {
        const id = +studentId.get('id');
        this.studentService.findStudentByID(id).subscribe(student => {
            this.student = student;
          }
        );
      }
    );
  }
  changeAvatar($event: string) {
    this.student.avatar = $event;
  }

  ngSubmit() {
    this.studentService.editStudent(this.student).subscribe();
  }
}
