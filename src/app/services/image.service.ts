import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ImageRequest } from '../models/image_request';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private flag: boolean;
  private url: string;
  private LAST_DAYS = 5;

  constructor(private http: HttpClient) {
    this.flag = false;
    this.url = 'https://api.nasa.gov/planetary/apod?api_key=J4opDzxs7CuKNadDmOFLESf1G7AGZmtrLICHtmwL&thumbs=true';
  }

  /**
   * Method which sets an error message.
   * @param message Error message to show.
   */
  setError(message: string) {
    this.error$.next(message);
  }

  /**
   * Method which gets an error message.
   * @returns Error message.
   */
  getError(): Observable<string> {
    return this.error$.asObservable();  
  }

  getImages(): Observable<any> {
    let dates = this.getFormattedDates();
    const PROPS = '&start_date='+dates[1]+'&end_date='+dates[0];

    let result = this.http.get(this.url+PROPS); 
    if(result !== null ) this.flag = true;
    
    return result; 
  }

  getFormattedDates(): string[] {
    let last = new Date();
    last.setDate(last.getDate()-this.LAST_DAYS);

    return [
      new Date(Date.now()).toISOString().slice(0,10),
      last.toISOString().slice(0,10)
    ];
  }

  getFlag(): boolean {
    return this.flag;
  }

  getImageDetail(date: string | null): Observable<any> {
    return this.http.get(this.url+'&date='+date);
  }
}
