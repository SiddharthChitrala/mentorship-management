import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Import the correct AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { VideoContentComponent } from './student-stuff/video-content/video-content.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-stuff/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher-stuff/teacher-dashboard/teacher-dashboard.component';
import { AdminDashboardComponent } from './admin-stuff/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { UploadVideosComponent } from './teacher-stuff/upload-videos/upload-videos.component';
import { AssigningMarksComponent } from './teacher-stuff/assigning-marks/assigning-marks.component';
import { ViewLoginDataComponent } from './admin-stuff/view-login-data/view-login-data.component';
import { ChatComponent } from './chat/chat.component';
import { SubmissionFormComponent } from './student-stuff/submission-form/submission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    AdminDashboardComponent,
    HomeComponent,
    UploadVideosComponent,
    AssigningMarksComponent,
    ViewLoginDataComponent,
    ChatComponent,
    VideoContentComponent,
    SubmissionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, // Use the AppRoutingModule you defined
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
