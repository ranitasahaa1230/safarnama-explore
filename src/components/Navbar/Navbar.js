import React from "react";
import { profile4 } from "../../assets";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <h2 className="log">TALK IT OUT</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search for inspirations and projects"
          />
        </div>
        <div className="create">
          <label for="create-post" className="btn btn-primary">
            Create
          </label>
          <div className="profile-photo">
            <img src={profile4} alt="profile-pic"/>
          </div>
        </div>
      </div>
    </nav>
  );
};
