import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../service/client.service';
import{ Client } from '../../../models/client';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientes: Client[];

  constructor(protected serviceClient: ClientService) { }
  
  ngOnInit() {
    this.actualisa();
  }


  actualisa(){
   
    this.serviceClient.getClient().subscribe(
      (data)=>{
        this.clientes= data['clients'];  
      },
      err=>console.log(err)
    );
    
    console.log(this.clientes);
  }

  
 

  

}
