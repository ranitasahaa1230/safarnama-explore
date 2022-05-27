import React from "react";
import { profile4 } from "../../assets";
import { NavLink, Link } from "react-router-dom";
import "./LeftSidebar.css";

export const LeftSidebar = () => {
  return (
    <div className="left">

      <Link to="/profile" className="profile">
        <div className="profile-photo">
          <img src={profile4} alt="profile-pic" />
        </div>
        <div className="handle">
          <h4 className="profile-text">Ranita Saha</h4>
          <p className="text-muted">@Ifullofsunshine</p>
        </div>
      </Link>

      <div className="sidebar">
        <NavLink to="/home" className="menu-item">
          <span>
            <i className="fa-solid fa-house"></i>
          </span>
          <h3>Home</h3>
        </NavLink>

        <NavLink to="/explore" className="menu-item">
          <span>
            <i className="fa-solid fa-compass"></i>{" "}
          </span>
          <h3>Explore</h3>
        </NavLink>

        <NavLink to="/bookmark" className="menu-item">
          <span>
            <i className="fa-solid fa-bookmark"></i>{" "}
          </span>
          <h3>Bookmarks</h3>
        </NavLink>

        {/* <a className="menu-item" id="theme">
              <span><i className="fa-solid fa-palette"></i></span>
              <h3>Theme</h3>
            </a> */}
        <NavLink to="/profile" className="menu-item">
          <span>
            <i className="fa-solid fa-user"></i>{" "}
          </span>
          <h3>Profile</h3>
        </NavLink>
      </div>

      <label htmlFor="create-post" className="btn btn-primary">
        Create Post
      </label>
    </div>
  );
};
