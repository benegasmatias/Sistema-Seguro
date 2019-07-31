import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypepeopleService {

  constructor(private http: HttpClient) { }


  gettypepeople() {
    return this.http.get('/myapp/typePersons/index.json');
  }
}
