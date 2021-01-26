import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'


const fbConfig = {
  apiKey: "AIzaSyBf5Qx2kCA-RnNYi_1Zn7qGDot886CpwpU",
  authDomain: "cycling-web-38e97.firebaseapp.com",
  databaseURL: "https://cycling-web-38e97.firebaseio.com",
  projectId: "cycling-web-38e97",
  storageBucket: "cycling-web-38e97.appspot.com",
  messagingSenderId: "551772301798",
  appId: "1:551772301798:web:a692d7f7f01f7323cfce27",
  measurementId: "G-7JJXYRC4TD"
  };

  const secondConfig = {
    apiKey: "AIzaSyAuuwUAmsZtwkxVPxYnZRu4ijsNFSiUtYY",
    databaseURL: "https://vehicle-8900f.firebaseio.com",
    projectId: "vehicle-8900f",
    storageBucket: "vehicle-8900f.appspot.com",
    appId: "1:339936465999:android:8998818cc233edae6b463a",
  }

// Initialize Firebase with a default Firebase project
firebase.initializeApp(fbConfig);

// Initialize Firebase with a second Firebase project
var otherProject = firebase.initializeApp(secondConfig, "other");

//access the default project's Firebase services
var database = firebase.database();

//access the second project's Firebase services
var seconddatabase = otherProject.database();

export default firebase;