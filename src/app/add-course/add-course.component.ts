import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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

  constructor(private courseService:CourseService,private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  addCourse(){
    const dateFormat: Date = this.new_Course.value.startDate;
    console.log(dateFormat);
    this.new_Course.value.startDate = new DatePipe('en-US').transform(dateFormat, 'MM/dd/yyyy');
    console.log(this.new_Course.value.startDate);
    this.courseService.addCourse(this.new_Course).subscribe(()=>{
      this.router.navigate(['/courses']);
    });
  }

}
