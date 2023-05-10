import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private flag: boolean;
  private url: string;

  constructor(private http: HttpClient) {
    this.flag = false;
    this.url = 'https://api.nasa.gov/planetary/apod?api_key=J4opDzxs7CuKNadDmOFLESf1G7AGZmtrLICHtmwL';
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
    const DATE_NOW = this.getFormattedDate(new Date(Date.now()));
    const d = new Date();
    d.setDate(d.getDate()-6);
    const DATE_LAST = this.getFormattedDate(d);

    const PROPS = '&start_date=2023-05-05&end_date=2023-05-10';
    //const PROPS = '&start_date='+DATE_LAST+'&end_date='+DATE_NOW;

    let result = this.http.get(this.url+PROPS); 
    if(result !== null ) this.flag = true;
    return result; 
  }

  getFormattedDate(date: Date): string {
    return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay();  
  }

  getFlag(): boolean {
    return this.flag;
  }

  getImageDetail(date: string | null): Observable<any> {
    return this.http.get(this.url+'&date='+date);
  }
}
