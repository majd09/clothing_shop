import { Outlet , Link } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as Crwnlogo } from '../../assets/crown (3).svg'
import '../Navigation/navigation.styles.scss'
import { UserContext } from "../../context/user.context";

const Navigation = ()=>{
  const {currentUser}=useContext(UserContext);
    console.log(currentUser);
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
                  <span className="nav-link"> Sign-out </span>
                )

                : (  <Link className="nav-link" to='/auth'>
                Sign-In
                     </Link>)
              }

         
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  

  export default Navigation