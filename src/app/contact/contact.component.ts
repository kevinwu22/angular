import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { EmailValidator } from '@angular/forms';
var firebase = require('firebase');
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.contactService.form.controls;
  ngOnInit() {
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.contactService.form.valid) {
      if (this.contactService.form.get('$key').value == null) {
      this.contactService.insertContact(this.contactService.form.value);
      }
      else {
      this.contactService.updateContact(this.contactService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
        this.contactService.form.reset();
        //this is to be done for proper reset operation


//NodeFirebaseTest (readme.txt)
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var firebaseConfig = {
    apiKey: "AIzaSyAY2JKJulIhrl9U3DfqUcTDBu7jpGeX5Q0",
    authDomain: "crudproject-59a4f.firebaseapp.com",
    databaseURL: "https://crudproject-59a4f.firebaseio.com",
    projectId: "crudproject-59a4f",
    storageBucket: "crudproject-59a4f.appspot.com",
    messagingSenderId: "990497186939"
  };
  console.log(firebaseConfig)
  console.log(firebase.initializeApp(firebaseConfig));

  // Get a reference to the database service
  var database = firebase.database();
  console.log("firebase database reference")
  console.log(database);

  var entry = {
    "fullName": document.getElementById("xfullName").value,
    "email": document.getElementById("xemail").value,
    "phone": document.getElementById("xphone").value
    }

    function writeUserData() {
        var randString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        database.ref('books/' + randString).set(entry);
      }

      writeUserData();
  // ...



      }
     }
    }
  

}
    

    


