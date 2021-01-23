import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';

const routes: Routes = [
  {path:'', component:PartyMastersComponent},
  {path:'',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
