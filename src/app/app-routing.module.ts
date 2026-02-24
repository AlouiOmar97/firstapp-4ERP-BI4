import { AddSuggestionComponent } from './core/add-suggestion/add-suggestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListSuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuggestionDetailsComponent } from './core/suggestion-details/suggestion-details.component';
import { LoginComponent } from './login/login.component';
import { UpdateSuggestionComponent } from './core/update-suggestion/update-suggestion.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'suggestion/list', component: ListSuggestionComponent},
  { path:'suggestion/add', component: AddSuggestionComponent},
  { path:'suggestion/details/:id', component: SuggestionDetailsComponent},
  { path:'suggestion/update/:id', component: UpdateSuggestionComponent},
  { path:'annonce', loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnonceModule) },
  { path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
