import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TypeconsumerService {

  constructor(private http: HttpClient) { }

  gettypeconsumer(){
    return this.http.get('/myapp/typeConsumers/index.json');
  }
}
