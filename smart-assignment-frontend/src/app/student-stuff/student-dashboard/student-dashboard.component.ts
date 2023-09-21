import { Component } from '@angular/core';
import { SubmissionFormComponent } from '../submission-form/submission-form.component';
import { VideoContentComponent } from '../video-content/video-content.component';
import { ChatComponent } from 'src/app/chat/chat.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  // Define a property to keep track of the active component to display
  activeComponent: any = null;

  // Function to set the active component based on the selected list item
  setActiveComponent(section: string) {
    switch (section) {
      case 'Submition_form':
        this.activeComponent = SubmissionFormComponent;
        break;
      case 'Video_content':
        this.activeComponent = VideoContentComponent;
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
