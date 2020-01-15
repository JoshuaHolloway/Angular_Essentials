import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent_josh } from './app.component';


import { User_Component_josh } from './user.component';

@NgModule({
  declarations: [
    AppComponent_josh,
    User_Component_josh
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent_josh,]
})
export class AppModule { }
