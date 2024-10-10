import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../services/contact.service';
import { Contact} from '../model/contact.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',

  styles: []
})

export class UpdateProduitComponent {

  currentcontact = new Contact();
constructor(private activatedRoute: ActivatedRoute,
private contactService: ContactService) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentcontact = this.contactService.updatcontact(this.activatedRoute.snapshot. params['email']);
console.log(this.currentcontact);

}
}
