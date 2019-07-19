import { EmailValidator } from '@angular/forms';
import { Sucursal } from './sucursal';
import { Items } from './items';

export class Cliente {
  id:number;
  nombre:string;
 apellido:string;
  dni:number;
  email:string;
  celular:number;
  fijo:number;
  fechan:string;
  sucursal:Sucursal;
  items: Items;

}
