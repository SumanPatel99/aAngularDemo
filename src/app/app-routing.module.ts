import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ImageshowComponent } from './imageshow/imageshow.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:FormComponent},
  {path:'partymaster', component:PartyMastersComponent},
  {path:'image', component:ImageshowComponent},
  { path:'profile/:id', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
