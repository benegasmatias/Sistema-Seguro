import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SexService {

  constructor(private http: HttpClient) { }

  getsex(){
    return this.http.get('/myapp/sexs/index.json');
  }
}
