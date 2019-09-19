import { Component, OnInit } from '@angular/core';


import {SexService} from '../../../service/sex.service';
import {TypeconsumerService} from '../../../service/typeconsumer.service';
import {TypepeopleService} from '../../../service/typepeople.service';
import {LocationService} from '../../../service/location.service';
import {ClientService} from '../../../service/client.service';

import {Sex} from '../../../models/sex';
import {Typeconsumer} from '../../../models/typeconsumer';
import {Typepeople} from '../../../models/typepeople';
import {Location} from '../../../models/location';
import {Client} from '../../../models/client';
import { FormGroup } from '@angular/forms';











@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  sexs: Sex[] = [];
  typeconsumers: Typeconsumer[] = [];
  typepeople: Typepeople[] = [] ;
  locations: Location[] = [];
  Clients: Client[] = [];

 cliente: Client;
 formClient:FormGroup;

  verificador:boolean=true;






  constructor(
    protected sexservice: SexService,
    protected typeConsumerservice: TypeconsumerService,
    protected typePeopleservice: TypepeopleService,
    protected locationservice: LocationService,
    protected clientservice: ClientService
  ) {
    this.cliente = new Client();
   

   }

  ngOnInit() {
    this.setSex();
    this.setTypeConsumer();
    this.setTypepeople();
    this.setLocations();

    
 
  }


  setLocations() {
    this.locationservice.getlocation()
    .subscribe(
      (data) => { // Success
        this.locations = data['departments'];
        },
        (error) => {
          console.error(error);
        }

    );

  }

  setTypepeople() {
    this.typePeopleservice.gettypepeople()
    .subscribe(
      (data) => { // Success
        this.typepeople = data['typepersons'];
        },
        (error) => {
          console.error(error);
        }

    );

  }


  setTypeConsumer() {
    this.typeConsumerservice.gettypeconsumer()
    .subscribe(
      (data) => { // Success
        this.typeconsumers = data['typeconsumers'];
        },
        (error) => {
          console.error(error);
        }

    );

  }

  setSex() {
  this.sexservice.getsex()
  .subscribe(
      (data) => { // Success
      this.sexs = data['sexs'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
 
 addclient(form:FormGroup) {
   
         if(this.clientservice.addCliente(this.cliente)
         .subscribe(
           (data)=>{//success
       console.log(data);
           },er=>console.log(er) ))
           { alert("Cliente Guardado")
             form.reset;
          }else{
             alert("chau");
           }
 }

 verifica(){

  this.clientservice.verificarCliente(this.cliente.client_dni).subscribe(
    (data) => {
      this.Clients = data['client'];
      if(this.Clients.length != 0){
       alert("Dni ya existe");
      }
    }
    
  ,
  err=>{
    console.log(err);
  }) 

 }

  }
