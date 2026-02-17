import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';
import { AnnonceAddComponent } from './annonce-add/annonce-add.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    AnnonceListComponent,
    AnnonceAddComponent
  ],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
