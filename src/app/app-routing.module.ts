import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';


const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'view-student/:id', component: ViewStudentComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'add-course', component: AddCourseComponent},
  { path: 'edit-course/:id', component: EditCourseComponent},
  { path: 'view-course/:id', component: ViewCourseComponent},  
  { path: '', redirectTo: '/students', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
