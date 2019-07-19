import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ClientFormComponent } from './client-form/client-form.component';


import { ItemClientComponent } from './item-client/item-client.component';
import { ListClientComponent } from './list-client/list-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ClientFormComponent,
    ItemClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
