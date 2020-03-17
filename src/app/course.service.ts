import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = `https://sis-rest-api.herokuapp.com/api/courses`;

  constructor(private http : HttpClient,) { }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourse(id:number):Observable<Course>{
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Course>(courseUrl);
  }

  editCourse(id:number,course):Observable<Course>{
    const courseDetail = course.value;
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.put<Course>(courseUrl,courseDetail);
  }

  deleteCourse(id:number):Observable<{}>{
    const courseUrl = `${this.apiUrl}/${id}`;
    return this.http.delete(courseUrl);
  }
  
  addCourse(course):Observable<Course>{
    const courseDetail = course.value;
    return this.http.post<Course>(this.apiUrl,courseDetail);
  }
  
}
