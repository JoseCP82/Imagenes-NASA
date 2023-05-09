import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() imageData: any;
  
  url: string = '';
  title: string = '';
  date: string = '';

  constructor(){  }

  ngOnInit(): void {
    this.title = this.imageData.title;
    this.url = this.imageData.url;
    this.date = this.imageData.date;
  }
}
