import React from "react";
import { logo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { user, token } = useSelector((state) => state.auth);

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

            {token && (
              <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="search"
                  placeholder="Search for inspirations and projects"
                />
              </div>
            )}
            <div className="create">
              {!token && (
                <Link to="/login">
                  <button className="btn btn-primary">Join Now</button>
                </Link>
              )}
              
              {token && (
                <Link to={`/profile/${user.username}`} className="profile">
                  <div className="profile-photo">
                    <img src={user.profileImage} alt="profile-pic" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
