import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // Import OnInit

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrls: ['./video-content.component.css']
})
export class VideoContentComponent implements OnInit { // Implement OnInit
  videos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getVideos();
  }
  
  getVideos() {
    this.http.get('http://localhost:9000/videos').subscribe((data: any) => {
      // Log the response data for debugging
      console.log(data);
      this.videos = data;
    });
  }
}
