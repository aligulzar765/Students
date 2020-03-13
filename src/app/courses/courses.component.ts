import { Component, OnInit } from '@angular/core';
import { Courses } from './../courses';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses : Courses[];

  constructor(private courseService : CoursesService, private router : Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe( (resp) =>{
      this.courses = resp;
    });
  }
  deleteCourse(course:Courses){
    this.courseService.deleteCourse(course.id).subscribe(
      ()=>{
      this.getCourses();
      this.router.navigate(['/courses']);
    });
  }

  


}
