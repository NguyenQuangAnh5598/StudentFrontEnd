import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.scss']
})
export class RemoveStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  deleteStudent
}
