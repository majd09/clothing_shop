
import '../button/button.styles.scss'

const Button_Type_Classes={
    google:'google-sign-in',
    inverted:'inverted',
}


const Button = ({buttonType,...otherProps})=>{

return  <button className={`button-container ${Button_Type_Classes[buttonType]}`} {...otherProps}>Sign Up</button>;

};

export default Button;