import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html'

})
export class AddContactComponent {
  
  mm:string='';

  newcontact=new Contact();


  

  constructor(private contactservice :ContactService)
  {

  }
  addcontact()
  {
    //console.log(this.newcontact);
    this.contactservice.addcontact(this.newcontact);
    this.mm="Contact" + this.newcontact.name +"add successfully";
  }
  
}
