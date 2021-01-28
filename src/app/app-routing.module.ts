import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { HeaderComponent } from './header/header.component';
import { ImageshowComponent } from './imageshow/imageshow.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'', component:HeaderComponent, canActivate: [Guard1Guard]},
  {path:'',component:FormComponent, canActivate: [Guard1Guard]},
  {path:'partymaster', component:PartyMastersComponent,  canActivate: [Guard1Guard]},
  {path:'image', component:ImageshowComponent, canActivate: [Guard1Guard]},
  { path:'profile/:id', component:ProfileComponent,  canActivate: [Guard1Guard]},
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'logout', component:LogoutComponent,  canActivate: [Guard1Guard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
