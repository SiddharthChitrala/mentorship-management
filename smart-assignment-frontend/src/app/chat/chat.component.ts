import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MessageData {
  username: string;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  username: string = '';
  messages$: Observable<MessageData[]> = new Observable<MessageData[]>(); 
  message: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('9a5470d17ebacab25ff0', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: MessageData) => { 
    });
    this.messages$ = this.http.get<MessageData[]>('http://localhost:9000/messages');
  }

  submit(): void {
    const messageData = {
      username: this.username,
      message: this.message
    };

    this.http.post('http://localhost:9000/msg', messageData)
      .subscribe(
        () => {
          this.message = '';
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
  }
}
