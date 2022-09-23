import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
  
})
export class MainModule { }
