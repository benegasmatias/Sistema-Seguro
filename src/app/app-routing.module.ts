import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SidebarComponent} from './components/navigation/sidebar/sidebar.component';
import{ClientFormComponent} from './components/clients/client-form/client-form.component';
import{ClientListComponent} from './components/clients/client-list/client-list.component';
import{LoginComponent} from './components/login/login/login.component'



const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'clients/add',
    component:ClientFormComponent
  },
  {
    path:'clients/list',
    component:ClientListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
