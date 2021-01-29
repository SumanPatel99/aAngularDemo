import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ImageshowComponent } from './imageshow/imageshow.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { JwtInterceptor, ErrorInterceptor } from "./helpers";

import { fakeBackendProvider } from './helpers';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { Guard1Guard } from './guard1.guard';
import { UserService } from './services/user.service';
import { LogoutComponent } from './logout/logout.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyMastersComponent,
    FormComponent,
    HeaderComponent,
    ImageshowComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    LogoutComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
    // NgxWebstorageModule.forRoot(),
  ],
  providers: [
    Guard1Guard,
        AlertService,
        AuthService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
