import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { ClientFormComponent } from './components/clients/client-form/client-form.component';
import { FormsModule } from '@angular/forms';

import {SexService} from './service/sex.service';
import {HttpClientModule} from '@angular/common/http';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientComponent } from './components/clients/client/client.component';
import { LoginComponent } from './components/login/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientFormComponent,
    ClientListComponent,
    ClientComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [SexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
