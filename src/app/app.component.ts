import { Component } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyAY2JKJulIhrl9U3DfqUcTDBu7jpGeX5Q0",
  authDomain: "crudproject-59a4f.firebaseapp.com",
  databaseURL: "https://crudproject-59a4f.firebaseio.com",
  projectId: "crudproject-59a4f",
  storageBucket: "crudproject-59a4f.appspot.com",
  messagingSenderId: "990497186939"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-firestore';

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}