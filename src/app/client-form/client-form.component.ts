import { Component, OnInit, Input } from '@angular/core';

import {Cliente} from '../models/cliente';

import {ClientserviceService} from '../service/clientservice.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  selectClient: Cliente = new Cliente();






  constructor(
    private servicio: ClientserviceService
  ) { }

  ngOnInit() {

  }

   abrirParamodificar(cli: Cliente) {
    this.selectClient = cli;

  }

  addcliente() {
   this.servicio.getclient(this.selectClient);
   this.selectClient = new Cliente();
  }


}
