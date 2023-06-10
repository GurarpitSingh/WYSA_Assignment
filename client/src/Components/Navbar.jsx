import React, { useRef } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

// navbar component
const Navbar = (props) => {
  const ref = useRef();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setLogged(false);
    // navigate("/");
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Wysa</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li ref={ref}>
              {props.logged ? <Link onClick={handleLogout} to="/">Logout</Link> : null}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
