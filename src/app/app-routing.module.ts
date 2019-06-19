import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { SearchService,AuthGuardService } from './shared';

const routes: Routes = [
  {path: 'search', component: SearchComponent,canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent},
  {path: 'edit/:id', component: EditComponent,canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
