import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC1tSMb86j7sfkDRCD0rE5lbSKsNO6GnC8",
    authDomain: "saltaranas-94ba8.firebaseapp.com",
    databaseURL: "https://saltaranas-94ba8-default-rtdb.firebaseio.com",
    projectId: "saltaranas-94ba8",
    storageBucket: "saltaranas-94ba8.appspot.com",
    messagingSenderId: "994599418173",
    appId: "1:994599418173:web:e1b566b94058d0b603ad54"
  };

  const app=initializeApp(firebaseConfig);
  export default getFirestore();