import { Component, OnInit, Input } from '@angular/core';
import {ClientService} from '../../../service/client.service';
import { Client } from 'src/app/models/client';
import{ClientListComponent} from '../client-list/client-list.component'


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  @Input() client:Client
  
  constructor(protected serviceclient:ClientService,protected lista: ClientListComponent) { }

  ngOnInit() {
  }

  deleteclient($id)
  {
    if(confirm("Seguro quiere eliminar")){
    this.serviceclient.deleteCliente($id).subscribe(res=>console.log(res),
    err=>console.log(err)
    );
    this.lista.actualisa();
    }


  }


}
