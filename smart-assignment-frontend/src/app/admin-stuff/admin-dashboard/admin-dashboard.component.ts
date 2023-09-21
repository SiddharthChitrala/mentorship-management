import { Component } from '@angular/core';
import { ViewLoginDataComponent } from '../view-login-data/view-login-data.component';
import { ChatComponent } from 'src/app/chat/chat.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  // Define a property to keep track of the active component to display
  activeComponent: any = null;

  // Function to set the active component based on the selected list item
  setActiveComponent(section: string) {
    switch (section) {
      case 'Login_Data':
        this.activeComponent = ViewLoginDataComponent;
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
