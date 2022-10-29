import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyAi1lFk4aUoEwuRDC02CUe0eTC7un-9e4E",
    authDomain: "react-auth-642ec.firebaseapp.com",
    projectId: "react-auth-642ec",
    storageBucket: "react-auth-642ec.appspot.com",
    messagingSenderId: "803932569151",
    appId: "1:803932569151:web:0d31a8f9c539c7cdbec28a",
    //measurementId: "G-KDQ2QLWQFY"
  };
  
  initializeApp(firebaseConfig);
  export const auth = getAuth();