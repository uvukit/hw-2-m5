import { Link, Outlet, useLocation } from "react-router-dom";
import classes from "./Header.module.css"
const Header = () => {
  const location = useLocation();

  return (
    <>
      <header>
          <ul style={{display:"flex"}} >
            <li style={{listStyle:"none", marginRight:"20px"}} >
              <Link to="/" state={{ from: location.pathname }}>
                Main
              </Link>
            </li>
            <br />
            <br />
            <li  style={{listStyle:"none"}}>
              <Link to="/post" state={{ from: location.pathname }}>
                Post
              </Link>
            </li>
          </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;