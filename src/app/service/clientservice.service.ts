import { Injectable, Input } from '@angular/core';
import {Cliente} from '../models/cliente';

import {ClientFormComponent} from '../client-form/client-form.component';


@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

   clien:Cliente[]= [
    {id:1 , nombre:"juan", apellido:"benegas",dni:37649825,email:"benegas.matias@gmail.com",celular:2644558877,fijo:4265577,fechan:"26/03/1990",sucursal:null,items:null},
    {id:2  ,nombre:"juan", apellido:"benegas",dni:37649825,email:"benegas.matias@gmail.com",celular:2644558877,fijo:4265577,fechan:"26/03/1990",sucursal:null,items:null}
  ];

  selectCliente: Cliente = new Cliente();
  formclient: ClientFormComponent;

  constructor() { }



  setclient() {
    return this.clien;
  }

  abrirparaModificar(cli: Cliente) {
    this.selectCliente = cli;
    this.formclient.abrirParamodificar(this.selectCliente);
  }

  getclient(selectclient: Cliente) {
    this.selectCliente = selectclient;
    selectclient.id = this.clien.length + 1;
    this.clien.push(selectclient);



  }
}
