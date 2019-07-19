import { Injectable } from '@angular/core';
import {Cliente} from '../models/cliente';
import{ItemserviceService} from './itemservice.service';




@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

   clien:Cliente[]= [
    {id:1 , nombre:"juan", apellido:"benegas",dni:37649825,email:"benegas.matias@gmail.com",celular:2644558877,fijo:4265577,fechan:"26/03/1990",items:null},
    {id:2  ,nombre:"juan", apellido:"benegas",dni:37649825,email:"benegas.matias@gmail.com",celular:2644558877,fijo:4265577,fechan:"26/03/1990",items:null}
  ];

  selectCliente: Cliente;


  constructor(
    itemServicio : ItemserviceService
    ) { }



  setclient() {
    return this.clien;
  }

  abrirparaModificar(cli: Cliente) {
    this.selectCliente = cli;

  }

  getclient(selectclient: Cliente) {
    this.selectCliente = selectclient;
    selectclient.id = this.clien.length + 1;
    this.clien.push(selectclient);
  }

  addItem(cli:Cliente){




  }
}
