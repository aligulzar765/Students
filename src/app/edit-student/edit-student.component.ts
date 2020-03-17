import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  courses:Course[];

  edit_Student = this.formBuilder.group({
    name:['',Validators.required],
    age:[,Validators.required],
    class:['',Validators.required],
    section:['',Validators.required],
    address:['',Validators.required],
    courseId:[,Validators.required]
  });


  constructor(private studentService : StudentService, private route : ActivatedRoute, private formBuilder : FormBuilder, private router : Router,private courseService: CourseService) { }

  ngOnInit(): void {
    this.getStudent();
    this.getCourses();
  }
  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe({
        next: (std) => {
          this.edit_Student.patchValue(std);
          console.log(this.edit_Student.value);
        }
      });
     
  }
  editStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.editStudent(id,this.edit_Student).subscribe({ next : (res) => {
      this.router.navigate(['/students']);
    }
    });
  }
  getCourses(){
    this.courseService.getCourses().subscribe((resp)=>{
      this.courses = resp;
    });
  }
}
