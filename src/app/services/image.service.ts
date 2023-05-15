import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private error$ = new Subject<string>();

  // variable that controls access to the url specified in routing module (guards)
  private flagGuard: boolean; 
  private urlApi: string;
  private LAST_DAYS = 5;

  constructor(private http: HttpClient) {
    this.flagGuard = false;
    this.urlApi = 'https://api.nasa.gov/planetary/apod?api_key=J4opDzxs7CuKNadDmOFLESf1G7AGZmtrLICHtmwL&thumbs=true';
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

  /**
   * Method that makes a get request to the external api passing a range of previously 
   * formatted dates as url parameters
   * @returns Observable with api request data
   */
  getImages(): Observable<any> {
    let dates = this.getFormattedDates();
    const PROPS = '&start_date='+dates[1]+'&end_date='+dates[0];

    let result = this.http.get(this.urlApi+PROPS).pipe(
      map( val => val),
      catchError( (error: ErrorEvent) => throwError(error) )
    ) 
    if(result !== null ) this.flagGuard = true;
    
    return result; 
  }

  /**
   * Function that generates two dates and formats them (YYYY-MM-DD), 
   * one is today's date and the other X days before.
   * @returns Array of two string elements where position 0 is today's date and position 1 is today's date minus X days.
   */
  getFormattedDates(): string[] {
    let last = new Date();
    last.setDate(last.getDate()-this.LAST_DAYS);

    return [
      new Date(Date.now()).toISOString().slice(0,10),
      last.toISOString().slice(0,10)
    ];
  }

  /**
   * Get method that obtein the flagGuard variable status
   * @returns True or false
   */
  getFlag(): boolean {
    return this.flagGuard;
  }

  /**
   * Set the flag status
   * @param flag Variable with status
   */
  setFlag(flag: boolean) {
    this.flagGuard = flag;
  }

  /**
   * Function that obtains an observable with the information of a data from the external API
   * @param date Date the request is made
   * @returns Observable with the specific data
   */
  getImageDetail(date: string | null): Observable<any> {
    return this.http.get(this.urlApi+'&date='+date);
  }
}
