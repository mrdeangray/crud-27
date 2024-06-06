import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Header = ({ className }) => {
  const { currUser } = useContext(AuthContext);
  return (
    <nav className={className}>
      <h3>CRUD-27</h3>
      <ul>
        <li>Link1</li>
        <li>Link1</li>
        <li>Link1</li>
      </ul>
      <button>{currUser ? currUser.displayName : "Sign Out"}</button>
    </nav>
  );
};

export default Header;
