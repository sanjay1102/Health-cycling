**SLFLIX ADMIN PANEL**

**FIREBASE IMPORTANT!!!!**

Create a file inside `src/Firebase` and add following code to that. replace firebase API key's you got from firebase with.

```
//import firebase
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/functions' 

const config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET_NAME",
    messagingSenderId: "SENDERID",
    appId: "APP_ID",
    measurementId: "MEASUREID"
};
firebase.initializeApp(config);
export default firebase;
```
