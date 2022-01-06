import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/Student';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {RemoveStudentComponent} from '../remove-student/remove-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dOB', 'avatar', 'delete', 'edit'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  studentList: Student[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList() {
    this.studentService.showList().subscribe(list => {
      this.studentList = list;
      this.dataSource = new MatTableDataSource<Student>(this.studentList);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudentList();
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(RemoveStudentComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteStudent(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
