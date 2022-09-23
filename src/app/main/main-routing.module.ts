import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: '', component: MainComponent,
  children:[
    {path:'header',component:HeaderComponent},
    {path:'contactus',component: ContactusComponent} ,
    {path:'aboutus', component: AboutusComponent},
  ]


},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
