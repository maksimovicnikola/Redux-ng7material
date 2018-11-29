import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Angular Material 7 imports
import { NgMaterialModule } from "./ng-material-module/ng-material.module";
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgMaterialModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'sr-SR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
