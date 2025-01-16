import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactoComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RedesComponent } from './components/redes/redes.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent, title: 'Portafolio' },
    { path: 'about', component: AboutmeComponent, title: 'About Me' },
    { path: 'contacto', component: ContactoComponent, title: 'Contacto'},
    { path: 'redes', component: RedesComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}