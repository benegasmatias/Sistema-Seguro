import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './components/navigation/sidebar/sidebar.component'
import{ClientFormComponent} from './components/clients/client-form/client-form.component'


const routes: Routes = [
  {
    path:'',
    component:SidebarComponent,
    pathMatch: 'full'
  },
  {
    path:'clients/add',
    component:ClientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
