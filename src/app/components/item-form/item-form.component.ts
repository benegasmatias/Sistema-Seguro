import { Component, OnInit,Input } from '@angular/core';
import {Items} from '../../models/items';

import { from } from 'rxjs';
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
   selecitem: Items;


  constructor() { }

  ngOnInit() {
  }

}
