import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firebase: AngularFireDatabase) { }
  contactList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  
  getContacts() {
  this.contactList = this.firebase.list('contacts');
  return this.contactList.snapshotChanges();
}


  insertContact(contact) {
  this.contactList.push({
    fullName: contact.fullName,
    email: contact.email,
    phone: contact.phone
  });
}

  populateForm(contact) {
  this.form.setValue(contact);
}

  updateContact(contact) {
  this.contactList.update(contact.$key,
    {
      fullName: contact.fullName,
      email: contact.email,
      phone: contact.phone
    });
}

  deleteContact($key: string) {
  this.contactList.remove($key);
}

}