import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  student:Student;

  constructor(
    private studentService:StudentService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id).subscribe({
        next: (std) => {
          this.student = std;
        }
      });
  }
  
}
