import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider}from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyC6UV1jxknFMCnTvzkd1FoCFQSoxLbTT-I",
    authDomain: "clothing-shop-60e73.firebaseapp.com",
    projectId: "clothing-shop-60e73",
    storageBucket: "clothing-shop-60e73.appspot.com",
    messagingSenderId: "792161848170",
    appId: "1:792161848170:web:e11dde17840d2f7f5e3313"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export  const auth= getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)