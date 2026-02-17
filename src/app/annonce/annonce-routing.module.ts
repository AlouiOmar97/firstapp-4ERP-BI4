import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';

const routes: Routes = [
  { path:'', component: AnnonceComponent, 
    children:[
      { path:'add', component: AnnonceAddComponent},
      { path:'list', component: AnnonceListComponent}
     ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AnnonceRoutingModule { }
