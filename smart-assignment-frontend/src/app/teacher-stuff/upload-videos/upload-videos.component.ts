import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.css']
})
export class UploadVideosComponent {
  selectedFile: File | null = null;
  videos: any[] = [];
  selectedVideoUrl: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getVideos();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('video', this.selectedFile);

    this.http.post('http://localhost:9000/upload', formData).subscribe(
      (response) => {
        console.log('Video uploaded successfully');
        this.selectedFile = null;
        this.getVideos();
      },
      (error) => {
        console.error('Error uploading video', error);
      }
    );
  }

  getVideos() {
    this.http.get('http://localhost:9000/videos').subscribe((data: any) => {
      this.videos = data;
    });
  }

  setSelectedVideoUrl(videoUrl: string) {
    this.selectedVideoUrl = videoUrl;
  }
  
}
