import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NewContactComponent,
    AddContactComponent,
    UpdateProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
