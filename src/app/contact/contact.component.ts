import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl:'./contact.component.html'

})
export class ContactComponent {

  contact?:Contact[];
  

  constructor(private contactservice:ContactService)
   {

    this.contact =this.contactservice.listecontact();
  //  this.contact=[];

    }


    ngOnInt():void{

     
    }

    deleteContact(p:Contact){

      //console.log(p);
      let conf = confirm("are you sure?");
      if (conf)

      this.contactservice.Deletecontact(p);

    }

    

}
