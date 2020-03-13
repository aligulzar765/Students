import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../courses';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  course :Courses;

  constructor(
    private courseService : CoursesService,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe({
      next: (crs) => {
         this.course = crs;
      }
    });
  }
  
}
