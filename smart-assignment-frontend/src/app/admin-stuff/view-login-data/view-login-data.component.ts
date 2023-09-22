import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-login-data',
  templateUrl: './view-login-data.component.html',
  styleUrls: ['./view-login-data.component.css']
})
export class ViewLoginDataComponent {
  loginData: any[] = [];

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/users").subscribe((resultData: any) => {
      console.log(resultData);
      this.loginData = resultData.users; // Access the 'users' property
    });
  }

  
  goBack() {
    location.reload();
  }
  
  getRoleLabel(roleValue: number): string {
    switch (roleValue) {
      case 0:
        return 'Student';
      case 1:
        return 'Mentor';
      case 2:
        return 'Admin';
      default:
        return 'Unknown'; // Handle any unexpected role values
    }
  }

  deleteUser(data: any) {
    // Check if data._id is defined
    if (!data._id) {
      console.error('User ID is undefined');
      return;
    }
  
    // Send a DELETE request to your API to delete the user data
    this.http.delete(`http://localhost:9000/user/${data._id}`).subscribe(
      (response: any) => {
        // Handle success (e.g., refresh user data)
        console.log('User deleted:', response);
        this.getAllDetails(); // Refresh user data after deletion
      },
      (error: any) => {
        // Handle error (e.g., display an error message)
        console.error('Error deleting user:', error);
      }
    );
  }
  
  
}
