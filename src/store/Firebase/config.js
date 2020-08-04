import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAOXAiOFjcZYeiEtqvjJvRgPkigEcGHE20",
    authDomain: "userapp-8a6a5.firebaseapp.com",
    databaseURL: "https://userapp-8a6a5.firebaseio.com",
    projectId: "userapp-8a6a5",
    storageBucket: "userapp-8a6a5.appspot.com",
    messagingSenderId: "654502727640",
    appId: "1:654502727640:web:b4d2159891ecba2477ecad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase