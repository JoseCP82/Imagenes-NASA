import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ImageRequest } from 'src/app/models/image_request';
import { ImageService } from 'src/app/services/image.service';

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listImages: ImageRequest[] = [];

  // Spinner is loading or not
  loading = false; 

  constructor(private _imageService: ImageService, private translate: TranslateService) {  }

  ngOnInit(): void {
    this.loading = true,
    this.getImages();
  }

  /**
   * Gets the service data
   */
  getImages() {
    try {
      this._imageService.getImages().subscribe(data => {
        this.loading = false;
        if(data.length === 0) {
          this._imageService.setError(this.translate.instant('imagesNotFound'));
          return;
        }

      this.listImages = data;
      
      }, Error => {
        this._imageService.setError(this.translate.instant('apiError'));
        this.loading = false;  
      });
      
    } catch (error) {
      throw new Error(''+error); 
    } 
  }
}
