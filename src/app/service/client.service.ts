import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {Client} from '../models/client';






@Injectable({
  providedIn: 'root'
})
export class ClientService {

  

  
  
  constructor(private http: HttpClient) { }

  getClient(){
   return this.http.get( `/myapp/clients/index.json`);  
  }
 
  verificarCliente($dni: number) {
      return this.http.get( `/myapp/clients/vieww/${$dni}`);
  }

  addCliente(cliente:Client)
  {
    return this.http.post('/myapp/clients/add.json',cliente);
    

  }

  deleteCliente($id:number) {
    return this.http.delete( `/myapp/clients/delete/${$id}.json`);
}


}
