import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contact: Contact[];

  constructor() {
    this.contact = [
      {
        name: 'ahmed',
        surname: 'mejrissi',
        email: 'ahmedme@gmail.com',
        creationDate: new Date('01/14/2018'),
      },
      {
        name: 'mouna',
        surname: 'mejrissi',
        email: 'mouname@gmail.com',
        creationDate: new Date('01/16/2018'),
      },
      {
        name: 'Nassim',
        surname: 'mejrissi',
        email: 'nassimme@gmail.com',
        creationDate: new Date('05/17/2024'),
      },
    ];
  }
  listecontact(): Contact[] {
    return this.contact;
  }

  addcontact(contact: Contact) {
    this.contact.push(contact);
  }

  Deletecontact(p: Contact) {
    const index = this.contact.indexOf(p, 0);
    if (index > -1) {
      this.contact.splice(index, 1);
    }
  }

  cont!:Contact;
  updatcontact(email:string): Contact{
    this.cont= this.contact.find(p => p.email == email)!;
    return this.cont;
    }
    
}
