import { Component, OnInit } from '@angular/core';

import {Cliente} from '../models/cliente';

import {ClientserviceService} from '../service/clientservice.service';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clienteArray: Cliente[];

  selecCliente: Cliente = new Cliente();



  constructor(
    private servicio: ClientserviceService
  ) { }


   modificar(cli: Cliente){
    this.selecCliente = cli;
    this.servicio.abrirparaModificar(this.selecCliente);

  }


  ngOnInit() {
    this.clienteArray = this.servicio.setclient();
  }

}
