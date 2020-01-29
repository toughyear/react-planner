import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = () => {
  return (
    <nav class="nav-wrapper teal lighten-2">
      <div class="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
