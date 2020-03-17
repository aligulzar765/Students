import { Component, OnInit } from '@angular/core';
import { Course } from './../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses : Course[];

  constructor(private courseService : CourseService, private router : Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.getCourses().subscribe( (resp) =>{
      this.courses = resp;
    });
  }
  deleteCourse(course:Course){
    this.courseService.deleteCourse(course.id).subscribe(
      ()=>{
      this.getCourses();
      this.router.navigate(['/courses']);
    });
  }

  


}
