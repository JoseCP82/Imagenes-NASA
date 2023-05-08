import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {
  message = '';
  showError = false;
  subscription: Subscription;

  constructor(private _imageService: ImageService) {
    this.subscription = this._imageService.getError().subscribe( data => {
      this.showError = true;
      this.message = data;
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();    
  }

  showErrorMessage() {
    this.showError = true,
    setTimeout( () => {
      this.showError = false;
    }, 2000);
  }
}
