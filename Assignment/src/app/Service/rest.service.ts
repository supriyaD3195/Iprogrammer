import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable,  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient ) { }
   getdata(): Observable<any>{
   return this.http.get('https://jsonplaceholder.typicode.com/photos')

 }
}
