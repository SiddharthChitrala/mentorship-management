import { Component } from '@angular/core';
import { UploadVideosComponent } from '../upload-videos/upload-videos.component';
import { AssigningMarksComponent } from '../assigning-marks/assigning-marks.component';
import { ChatComponent } from 'src/app/chat/chat.component';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {

  // Define a property to keep track of the active component to display
  activeComponent: any = null;

  // Function to set the active component based on the selected list item
  setActiveComponent(section: string) {
    switch (section) {
      case 'Upload_video':
        this.activeComponent = UploadVideosComponent;
        break;
      case 'Assigned_marks':
        this.activeComponent = AssigningMarksComponent;
        break;
      case 'Chat_App':
        this.activeComponent = ChatComponent;
        break;
      default:
        break;
    }
  }
  navigateTo(section: string) {
    this.setActiveComponent(section);
  }
}
