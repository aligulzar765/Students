import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Courses } from '../courses';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  course:Courses;

  edit_Course = this.formBuilder.group({
    name:['',Validators.required],
    duration:['',Validators.required],
    fee:[,Validators.required],
    startDate:[,Validators.required]
  });
  constructor(private courseService : CoursesService, private formBuilder : FormBuilder,private route:ActivatedRoute, private router : Router) { }

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
  editCourse(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.editCourse(id,this.edit_Course).subscribe(
      (resp) => {
        this.router.navigate(['/courses']);
      }
    );
  }
}
