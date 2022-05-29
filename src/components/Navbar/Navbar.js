import React from "react";
import { profile4, logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && pathname !== "/signup" && (
        <nav>
          <div className="container">
            <div className="flex-hub">
              <Link to="/">
                <img src={logo} alt="logo" className="header-logo" />
              </Link>
              <Link to="/" className="header-name">
                <h2 className="log">Talk It Out</h2>
              </Link>
            </div>

           <div className="search-bar">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="search"
                placeholder="Search for inspirations and projects"
              />
            </div>
            <div className="create">
              <label htmlFor="create-post" className="btn btn-primary">
                Create
              </label>
              <div className="profile-photo">
                <img src={profile4} alt="profile-pic" />
              </div>
            </div>

          </div>
        </nav>
      )}
    </>
  );
};
