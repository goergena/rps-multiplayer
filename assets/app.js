
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0p09iGsREZtl9WHh2-oKlXJi5o9dibwk",
    authDomain: "rps-multiplayer-61ec1.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-61ec1.firebaseio.com",
    projectId: "rps-multiplayer-61ec1",
    storageBucket: "rps-multiplayer-61ec1.appspot.com",
    messagingSenderId: "235482916681"
  };
  firebase.initializeApp(config);


  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });

  //rps on click add class "active"

  