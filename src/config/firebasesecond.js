import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions'

const secondConfig = {
    apiKey: "AIzaSyAuuwUAmsZtwkxVPxYnZRu4ijsNFSiUtYY",
    databaseURL: "https://vehicle-8900f.firebaseio.com",
    projectId: "vehicle-8900f",
    storageBucket: "vehicle-8900f.appspot.com",
    appId: "1:339936465999:android:8998818cc233edae6b463a",
  }

  var otherProject = firebase.initializeApp(secondConfig, "other");

  var seconddatabase = otherProject.database();

  export default seconddatabase;