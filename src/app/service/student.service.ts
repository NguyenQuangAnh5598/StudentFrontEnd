import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private API_STUDENT = environment.API_LOCAL;
  constructor(private http: HttpClient) {
  }

  showList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_STUDENT + 'list');
  }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API_STUDENT + 'create',student);
  }

  deleteStudent(id: number): Observable<Student> {
    return this.http.delete<Student>(this.API_STUDENT + 'delete/'+id);
  }

  editStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.API_STUDENT + 'edit',student);
  }

  findStudentByID(id: number): Observable<Student> {
    return this.http.get<Student>(this.API_STUDENT + 'findOne/' + id);
  }
}
