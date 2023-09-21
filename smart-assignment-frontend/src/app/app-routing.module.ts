import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-stuff/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-stuff/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './admin-stuff/admin-dashboard/admin-dashboard.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentDashboardComponent },
  { path: 'teacher', component: TeacherDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'chat', component: ChatComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
