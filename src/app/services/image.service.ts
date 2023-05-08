import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();

  constructor(private http: HttpClient) { }

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
    const DATE = '2020-09-15';
    const URL = 'https://api.nasa.gov/planetary/apod?api_key='+KEY+'&date='+DATE;
    return this.http.get(URL);
  }
}
