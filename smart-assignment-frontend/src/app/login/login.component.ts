import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface ApiResponse {
  message: string;
  role: number;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginVisible: boolean = true;
  username: string = '';
  email: string = '';
  password: string = '';
  role: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  toggleForm() {
    this.isLoginVisible = !this.isLoginVisible;
  }

  register(): void {
    this.http.post<ApiResponse>('http://localhost:9000/register', {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Registration error:', error);
        if (error.status === 401) {
          return throwError('Registration failed: Invalid credentials');
        } else {
          return throwError('Registration failed: An error occurred');
        }
      })
    ).subscribe(
      response => {
        console.log(response.message);
        if (response.role === 0) {
          this.router.navigate(['/student']);
        } else if (response.role === 1) {
          this.router.navigate(['/teacher']);
        } else if (response.role === 2) {
          this.router.navigate(['/admin']);
        }
      }
    );
  }

  login(): void {
    this.http.post<ApiResponse>('http://localhost:9000/login', {
      email: this.email,
      password: this.password
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          return throwError('Login failed: Invalid credentials');
        } else {
          return throwError('Login failed: An error occurred');
        }
      })
    ).subscribe(
      response => {
        console.log('API Response:', response); // Debugging line
        console.log(response.message);
        console.log('User role:', response.role);
  
        if (typeof response.role === 'number') {
          if (response.role === 0) {
            this.router.navigate(['/student']);
          } else if (response.role === 1) {
            this.router.navigate(['/teacher']);
          } else if (response.role === 2) {
            this.router.navigate(['/admin']);
          } else {
            console.error('Invalid user role:', response.role);
          }
        } else {
          console.error('Invalid role data:', response.role);
        }
      }
    );
  }
  
  
}
