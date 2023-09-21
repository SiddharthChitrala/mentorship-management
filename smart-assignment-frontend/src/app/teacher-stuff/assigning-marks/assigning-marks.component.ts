import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assigning-marks',
  templateUrl: './assigning-marks.component.html',
  styleUrls: ['./assigning-marks.component.css']
})
export class AssigningMarksComponent {

  Details: any[] = [];
  filteredDetails: any[] = [];
  searchTerm: string = '';
  selectedStudentId: string = '';
  marks: number = 0;

  constructor(private http: HttpClient) {
    this.getAllDetails();
  }

  getAllDetails() {
    this.http.get("http://localhost:9000/student/get").subscribe((resultData: any) => {
      console.log(resultData);
      this.Details = resultData.data;
    });
  }

  searchAttendance() {
    this.filteredDetails = this.Details.filter(student => {
      return student.fullName.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  deleteStudent(id: string) {
    this.http.delete(`http://localhost:9000/student/delete/${id}`).subscribe(() => {
      this.getAllDetails();
    });
  }

  assignMarks(studentId: string) {
    this.selectedStudentId = studentId;
    this.marks = 0;
  }

  saveMarks() {
    if (this.selectedStudentId && this.marks >= 0) {
      // Send the updated marks to the server
      this.http.patch(`http://localhost:9000/student/update/${this.selectedStudentId}`, { marks: this.marks })
        .subscribe(() => {
          this.getAllDetails();
          alert('Updated Marks')
          window.location.reload();
        });
    }
  }
}
