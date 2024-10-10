import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path: "contact", component:ContactComponent},
  {path: "add-contact", component:AddContactComponent},
  { path: "", redirectTo: "contact", pathMatch: "full" },
  {path: "updateProduit/:id", component:UpdateProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
