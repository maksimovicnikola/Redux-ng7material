import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Angular Material 7
import { NgMaterialModule } from "./ng-material-module/ng-material.module";
// Locales for datepicker
import { MAT_DATE_LOCALE } from "@angular/material";

// Ngx Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ContactService } from './services/contact.service';
// Redux imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { contactsReducer } from './state-management/contacts/contacts.reducer';

// Components
import { HomepageComponent } from "./homepage/homepage.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, HomepageComponent, ContactInfoComponent],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({ contacts: contactsReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "sr-SR" }, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
