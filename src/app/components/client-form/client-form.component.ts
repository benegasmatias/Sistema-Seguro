import { Component, OnInit, Input } from '@angular/core';

import {Cliente} from '../../models/cliente';

import {ClientserviceService} from '../../service/clientservice.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  selectClient: Cliente = new Cliente();

  @Input() selectcliente: Cliente;

  constructor(
    private servicio: ClientserviceService
  ) { }

  ngOnInit() {



  }


   abrirParamodificar(cli: Cliente) {
    this.selectClient = this.servicio.selectCliente;

  }

  addcliente() {
   this.servicio.getclient(this.selectClient);
   this.selectClient = new Cliente();
  }


}
