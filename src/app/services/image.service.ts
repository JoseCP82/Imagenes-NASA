import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();
  private flag: boolean;

  constructor(private http: HttpClient) {
    this.flag = false;
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
    const KEY = 'J4opDzxs7CuKNadDmOFLESf1G7AGZmtrLICHtmwL';
    const DATE_NOW = this.getFormattedDate();

    //const URL = 'https://api.nasa.gov/planetary/apod?api_key='+KEY+'&start_date=23/05/03&end_date=23/05/08';
    const URL = 'https://api.nasa.gov/planetary/apod?api_key='+KEY+'&count=6';
    this.flag = true;
    return this.http.get(URL);
  }

  getFormattedDate(): string {
    return new Date(Date.now()).toLocaleDateString();
  }

  getFlag(): boolean {
    return this.flag;
  }
}
