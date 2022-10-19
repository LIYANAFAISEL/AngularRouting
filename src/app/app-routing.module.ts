import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},    //default page as home 
  {path: 'home' ,  component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact' , component: ContactComponent},
  {path: '**' , redirectTo: 'home'},     // wildcard routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
