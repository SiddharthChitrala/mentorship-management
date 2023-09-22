import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent {
  fullName: string = '';
  email: string = '';
  comments: string = '';
  gitLink: string = '';
  videoLink: string = '';

  constructor(private http: HttpClient) { }

  goBack() {
    location.reload();
  }
  
  onSubmit() {
    const formData = {
      fullName: this.fullName,
      email: this.email,
      comments: this.comments,
      gitLink: this.gitLink,
      videoLink: this.videoLink
    };
    console.log(formData);
    this.http.post<any>('http://localhost:9000/student/submit', formData).subscribe(
      (response) => {
        console.log('Assignment submitted successfull...', response.message);
        alert('Assignment submitted successfull')
        window.location.reload();
      },
      (error) => {
        console.error('Error submitting attendance..', error);
      }
    );
  }
}
