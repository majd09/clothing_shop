import { createUserDocumentFromAuth,signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import SignUp from '../../componets/sign-up/sign-up.component';




const SignIn = () => {


    const logGoogleUser = async () =>{
        const {user}=await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
    
        <div>
        <h1> Sign In Page</h1>
        <button onClick={logGoogleUser}>signin with googlePopup</button>
        <SignUp />
        </div>
    );
};

export default SignIn