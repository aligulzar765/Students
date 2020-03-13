import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  apiUrl = `https://sis-rest-api.herokuapp.com/api/courses`;

  constructor(private http : HttpClient,) { }

  getCourses():Observable<Courses[]>{
    return this.http.get<Courses[]>(this.apiUrl);
  }

  getCourse(id:number):Observable<Courses>{
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Courses>(courseUrl);
  }

  editCourse(id:number,course):Observable<Courses>{
    const courseDetail = course.value;
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.put<Courses>(courseUrl,courseDetail);
  }

  deleteCourse(id:number):Observable<{}>{
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(courseUrl);
  }
  
  addCourse(course):Observable<Courses>{
    const courseDetail = course.value;
    return this.http.post<Courses>(this.apiUrl,courseDetail);
  }
  
}
