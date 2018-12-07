var firebase = require('firebase');

//NodeFirebaseTest (readme.txt)
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyAY2JKJulIhrl9U3DfqUcTDBu7jpGeX5Q0",
    authDomain: "crudproject-59a4f.firebaseapp.com",
    databaseURL: "https://crudproject-59a4f.firebaseio.com",
    projectId: "crudproject-59a4f",
    storageBucket: "crudproject-59a4f.appspot.com",
    messagingSenderId: "990497186939"
  };
  console.log(config)
  console.log(firebase.initializeApp(config));

  // Get a reference to the database service
  var database = firebase.database();
  console.log("firebase database refrence")
  console.log(database);

  var testEntry = {
    "fullName": "Bob Joe",
    "email": "example@example.com",
    "phone": "6261001234"
    }

    function writeUserData() {
        var randString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        database.ref('books/' + randString).set(testEntry);
      }

      writeUserData();
  // ...