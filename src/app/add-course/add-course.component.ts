import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  new_Course = this.formBuilder.group({
    name:['',Validators.required],
    duration:['',Validators.required],
    fee:[,Validators.required],
    startDate:[,Validators.required]
  }) 

  constructor(private courseService:CoursesService,private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.courseService.addCourse(this.new_Course).subscribe(()=>{
      this.router.navigate(['/courses']);
    });
  }

}
