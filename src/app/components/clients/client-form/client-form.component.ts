import { Component, OnInit } from '@angular/core';

import {SexService} from '../../../service/sex.service';
import {TypeconsumerService} from '../../../service/typeconsumer.service';
import {TypepeopleService} from '../../../service/typepeople.service';
import {LocationService} from '../../../service/location.service';

import {Sex} from '../../../models/sex';
import {Typeconsumer} from '../../../models/typeconsumer';
import {Typepeople} from '../../../models/typepeople';
import {Location} from '../../../models/location';





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

  constructor(
    protected sexservice: SexService,
    protected typeConsumerservice: TypeconsumerService,
    protected typePeopleservice: TypepeopleService,
    protected locationservice: LocationService
  ) { }

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

  }
