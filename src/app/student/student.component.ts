import { Component, OnInit } from '@angular/core';
import { Student } from './../student';
import { StudentService } from './../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students : Student[];
  

  constructor(private studentService:StudentService, private router : Router ) {}

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() : void{
    this.studentService.getStudents().subscribe((resp) => {
      this.students = resp;
    })
  }
  
  deleteStudent(student:Student) : void{
    this.studentService.deleteStudent(student.id).subscribe(
      () =>{
        this.getStudents();
        this.router.navigate(['/students']);
      }
    );
    
  }
  
  
  
}
