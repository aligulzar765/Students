import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../course';


@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  course :Course;

  constructor(
    private courseService : CourseService,
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
