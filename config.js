import * as firebase from 'firebase';
require("@firebase/firestore");



var firebaseConfig = {
    apiKey: "AIzaSyC0e6si_MNRGUZPM93OoVT0L-Zd6m5Mjb4",
    authDomain: "wily-76221.firebaseapp.com",
    projectId: "wily-76221",
    storageBucket: "wily-76221.appspot.com",
    messagingSenderId: "305662596932",
    appId: "1:305662596932:web:9adc60c539a6011f562911"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();