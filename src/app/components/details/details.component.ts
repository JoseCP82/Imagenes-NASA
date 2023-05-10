import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  date: string | null;
  explanation = '';
  urlImage = '';
  loading = false;

  constructor(private router: Router, 
              private aRoute: ActivatedRoute, 
              private _imageService: ImageService) {
    this.date = this.aRoute.snapshot.paramMap.get('date');
  }

  ngOnInit(): void {
    this.loading = true;
    this.getImage();
  }

  goToDashboard(): void {
    this.router.navigate(['dashboard']);
  }

  getImage(): void {
    this._imageService.getImageDetail(this.date).subscribe( data => {
      this.loading = false;
      this.explanation = data.explanation;
      this.urlImage = data.url;
    },error => {
      this._imageService.setError('Sorry, an error occurred.');
      this.loading = false;
    });
  }
}
