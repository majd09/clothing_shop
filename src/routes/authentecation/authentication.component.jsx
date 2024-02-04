
import SignUp from '../../componets/sign-up form/sign-up.component';
import SignIn from '../../componets/sign-in form/sign-in-form.component';

import '../authentecation/authentication.styles.scss'



const Authentication = () => {


    return (
    
        <div className='authentication-container'>
        
        <SignIn/>
        <SignUp />
        </div>
    );
};

export default Authentication