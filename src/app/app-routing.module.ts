import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartyMastersComponent } from './party-masters/party-masters.component';

const routes: Routes = [
  {path:'', component:PartyMastersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
