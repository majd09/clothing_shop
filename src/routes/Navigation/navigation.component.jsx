import { Outlet , Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from '../../assets/crown (3).svg'
import '../Navigation/navigation.styles.scss'
const Navigation = ()=>{
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
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  };
  

  export default Navigation