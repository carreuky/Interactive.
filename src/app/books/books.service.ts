import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http:HttpClient){}

  getBooks(){
    return this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
  }

}
