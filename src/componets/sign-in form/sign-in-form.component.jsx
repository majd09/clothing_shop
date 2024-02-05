import { useState } from 'react';
import {signInWithGooglePopup,createUserDocumentFromAuth}from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import '../sign-in form/sign-in.styles.scss'
import Button from '../button/button.component'; 
import { signInWithEmailAndPassword } from 'firebase/auth';

const defaultFormFields={
  
    email:'',
    password:'',
}
const SignIn=()=>{

   const [formFields,setFormFields]=useState(defaultFormFields);
   const {email,password}= formFields;
   console.log(formFields);
   const restFormFields=()=>{
    setFormFields(defaultFormFields);
}

const signInWithGoogle = async () =>{
    const {user}=await signInWithGooglePopup();
   await createUserDocumentFromAuth(user);
}

const handleSubmit=async(event)=>{

        event.preventDefault();

       
        try{

           const {user} = await signInWithEmailAndPassword(email,password);


            restFormFields();
        }
        catch(error)
        
        { 

             /*  console.log(error); */

           }

}



   const handleChange= (event)=>{

    const{name,value}= event.target;
    setFormFields({...formFields,[name]:value});

   };

return(

<div className='sign-up-container'>
  <h2> Aleady Have an Account ? </h2>
    <span> Sign in with your email and password </span>
        <form onSubmit={ handleSubmit}>
                  
                   < FormInput label='Email ' type="email" required onChange={handleChange}name='email'value={email}/>
                      
                          < FormInput label='Password ' type="password" required onChange={handleChange} name='password'value={password}/>
                             <div className='buttons-container'>
                             <Button type='submit'> Sign in </Button>
                                  <Button buttonType='google' onClick={signInWithGoogle}> Google Sign in </Button>

                             </div> 
                                
        </form>
</div>
);

};

export default SignIn