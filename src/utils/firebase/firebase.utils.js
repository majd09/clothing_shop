import { initializeApp } from "firebase/app";
import { getAuth,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged, signOut}from 'firebase/auth'
import {getFirestore, doc , getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'
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

export const db= getFirestore();

export const addCollectionAndDocuments=async(collectionskey,objectsToAdd)=>{

    const collectionRef= collection(db,collectionskey);
    const batch=writeBatch(db);
    objectsToAdd.forEach((object)=>{

        const docRef=doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    });
    await batch.commit() ;
    console.log('done');
}

export const getCategoriesAndDocuments= async()=>{
    const collectionRef=collection(db,'categories');
    const q= query(collectionRef);
    const querySnapshot= await getDocs(q);
    const categoryMap= querySnapshot.docs.reduce((acc,docSnapshot)=>{

        const {title,items}=docSnapshot.data();
        acc[title.toLowerCase()]=items;
        return acc;
    },{}); 
        return categoryMap;

}

export const createUserDocumentFromAuth= async(userAuth, additionalInformation)=>{
    if(!userAuth)return;
    const  userDocRef=doc(db,'users',userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

if (!userSnapshot.exists()){
    const {email, displayName}= userAuth;
    const creatAt = new Date();
    try{ await setDoc(userDocRef,{displayName,email,creatAt,...additionalInformation});}
    catch(error){console.log('error creating the user',error.message)
}

return userDocRef;


};}

export const createAuthUserWithEmailAndPassword = async(email,password)=>{

    if(!email||!password) return ;
    
    return await createUserWithEmailAndPassword(auth,email,password);

}


export const signIncreateAuthUserWithEmailAndPassword = async(email,password)=>{

    if(!email||!password) return ;
    
    return await signInWithEmailAndPassword(auth,email,password);

}

export const signOutUser = async()=>await signOut(auth);

export const onAuthStateChangeListener =( callback)=> onAuthStateChanged(auth,callback);