
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-YWZWX7J4C0nyLllqoEexzfk3hlWfWW8",
    authDomain: "newproject-68aa7.firebaseapp.com",
    databaseURL: "https://newproject-68aa7.firebaseio.com",
    projectId: "newproject-68aa7",
    storageBucket: "",
    messagingSenderId: "374831192461",
    appId: "1:374831192461:web:15b87eb5285c16b8d705c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
const db = firebase.firestore();