import { NgModule,} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ListClientComponent } from './components/list-client/list-client.component';
import { ItemFormComponent } from './components/item-form/item-form.component';


const routes: Routes = [
  {path: 'formCliente',
  component: ClientFormComponent
},
{
  path:'listClientes',
  component:ListClientComponent
},{
  path:'formItem',
  component :ItemFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
