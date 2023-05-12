import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ImageService } from 'src/app/services/image.service';

@Component({ 
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listImages: any[] = [];

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
/*
    this.listImages = [
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"},
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"},
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"},
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"},
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"},
      {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth. The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015. The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun. Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"}
    ];
   */ 
  }
}
