import React from "react";
import { profile4 } from "../../assets";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div class="container">
        <h2 class="log">TALK IT OUT</h2>
        <div class="search-bar">
          <i class="uil uil-search"></i>
          <input
            type="search"
            placeholder="Search for inspirations and projects"
          />
        </div>
        <div class="create">
          <label for="create-post" class="btn btn-primary">
            Create
          </label>
          <div class="profile-photo">
            <img src={profile4} />
          </div>
        </div>
      </div>
    </nav>
  );
};
