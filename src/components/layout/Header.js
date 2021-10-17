import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="alignHeaderElementsCenter">
      <h1 className="text-white">
        <i className="fas fa-globe-americas mt-15 mr-10"></i> CountryFinder
      </h1>
      <div className="alignHeaderOptions">
        <Link className="icon-bg-white" to={`/`}>
          <h3 className="mr-25">
            <i className="fas fa-home mr-4"></i> Home
          </h3>
        </Link>
        <Link to={`/about`} className="icon-bg-white">
          <h3 className="mr-20">
            <i className="fas fa-address-card mr-8"></i>
            About
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
