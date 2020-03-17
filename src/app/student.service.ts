import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiUrl = 'https://sis-rest-api.herokuapp.com/api/students'; 

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudent(id: number):Observable<Student>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  editStudent(id: number,student):Observable<Student>{
    student.value.courseId = +student.value.courseId;
    const studentDetail = student.value;
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Student>(url,studentDetail);
  }

  deleteStudent(id: number):Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addStudent(student) : Observable<Student> {
    student.value.courseId = +student.value.courseId;
    const studentDetails = student.value;
    return this.http.post<Student>(this.apiUrl, studentDetails);
  }
}
