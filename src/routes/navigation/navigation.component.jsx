import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as LogoUnlimited } from "../../assets/logo-unlimited.svg";
import "./navigation.styles.scss";

function Navigation() {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/home">
          <LogoUnlimited className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
