import { createUserDocumentFromAuth,signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user}=await signInWithGooglePopup();
        createUserDocumentFromAuth(user);
    }
    return (
    
        <div>
        <h1> Sign In Page</h1>
        <button onClick={logGoogleUser}>signin with googlePopup</button>
        </div>
    );
};

export default SignIn