import { Outlet , Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as Crwnlogo } from '../../assets/crown (3).svg'
import '../Navigation/navigation.styles.scss'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../componets/cart-icon/cart-icon.component";
import CartDropdown from "../../componets/cart-dropDown/cart-dropDown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = ()=>{
  const {currentUser}=useContext(UserContext);
    console.log(currentUser);

   const {isCartOpen}=useContext(CartContext)
    return (
      <Fragment>
  
        <div className="navigation">
            <div className="logo-container">
            <Link className="nav-link" to='/'>
             <Crwnlogo className="logo" />
            </Link>
          </div>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
              SHOP
            </Link>
              {
                currentUser ? (
                  <span className="nav-link" onClick={signOutUser}> {''} Sign-out {''} </span>
                 
                )

                : (  <Link className="nav-link" to='/auth'>
                Sign-In
                     </Link>)
              }
              <CartIcon/>
         
          </div>
          {isCartOpen && <CartDropdown/> }
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  

  export default Navigation