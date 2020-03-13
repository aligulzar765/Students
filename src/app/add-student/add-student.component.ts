import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { Courses } from '../courses';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  courses:Courses[];

  new_Student = this.formBuilder.group({
    name:['',Validators.required],
    age:[,Validators.required],
    class:['',Validators.required],
    section:['',Validators.required],
    address:['',Validators.required],
    courseId:[,Validators.required]
  });
  


  constructor(private studentService : StudentService , private formBuilder : FormBuilder, private router : Router,private courseService :CoursesService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  
  addStudent(){
    this.studentService.addStudent(this.new_Student).subscribe(res => {
      this.router.navigate(['/students']);
    });
    
  }
  getCourses(){
    this.courseService.getCourses().subscribe((resp)=>{
      this.courses = resp;
    });
  }
  
}
