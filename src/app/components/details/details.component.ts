import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  type = '';
  loading = false;

  constructor(private router: Router, 
              private aRoute: ActivatedRoute, 
              private _imageService: ImageService,
              private translate: TranslateService) {
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
      this.type = data.media_type;
    },error => {
      this._imageService.setError(this.translate.instant('error'));
      this.loading = false;
    });
  }
}
