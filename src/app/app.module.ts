import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyMastersComponent } from './party-masters/party-masters.component';
import {NgxWebstorageModule} from 'ngx-webstorage';

import { HttpModule } from '@angular/http'
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyMastersComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
