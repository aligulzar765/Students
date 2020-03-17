import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {


  edit_Course = this.formBuilder.group({
    name:['',Validators.required],
    duration:['',Validators.required],
    fee:[,Validators.required],
    startDate:[,Validators.required]
  });
  constructor(private courseService : CourseService, private formBuilder : FormBuilder,private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.getCourse();
  }
  getCourse():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id).subscribe({
      next: (crs) => {
        const dateFormat = crs.startDate;
        crs.startDate = new DatePipe('en-US').transform(dateFormat, 'yyyy-MM-dd');
        this.edit_Course.patchValue(crs);
      }
    });
  }
  editCourse(){
    const id = +this.route.snapshot.paramMap.get('id');
    const dateFormat: Date = this.edit_Course.value.startDate;
    this.edit_Course.value.startDate = new DatePipe('en-US').transform(dateFormat, 'MM/dd/yyyy');
    this.courseService.editCourse(id,this.edit_Course).subscribe(
      (resp) => {
        this.router.navigate(['/courses']);
      }
    );
  }
}
