import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _imageService: ImageService) {  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this._imageService.getImages().subscribe(data => {
      console.log(data);
    });
    
    //this._imageService.setError('Sorry, an error occurred. Wait a few minuts an push refresh button.');
  }
}
