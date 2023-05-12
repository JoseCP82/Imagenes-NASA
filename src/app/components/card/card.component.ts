import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imageData: any;
  
  // json data variables for mapped
  url: string = '';
  title: string = '';
  date: string = '';
  type: string = '';

  constructor(){  }

  ngOnInit(): void {
    this.title = this.imageData.title;
    this.url = this.imageData.url;
    this.date = this.imageData.date;
    this.type = this.imageData.media_type;
  }
}
