import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>Product</Link>
      <Link to={"/"}>Cart</Link>
    </>
  );
};

export default Header;
