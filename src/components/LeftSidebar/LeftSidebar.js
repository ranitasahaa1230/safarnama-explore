import React from "react";
import { profile4 } from "../../assets";
import "./LeftSidebar.css";

export const LeftSidebar = () => {
  return (
    <div className="left">
      <a href="" className="profile">
        <div className="profile-photo">
          <img src={profile4} alt="profile-pic" />
        </div>
        <div className="handle">
          <h4 className="">Ranita Saha</h4>
          <p className="text-muted">@Ifullofsunshine</p>
        </div>
      </a>

      <div className="sidebar">
        <a href="" className="menu-item active">
          <span>
            <i className="uil uil-home"></i>
          </span>
          <h3>Home</h3>
        </a>
        <a href="" className="menu-item">
          <span>
            <i className="uil uil-compass"></i>
          </span>
          <h3>Explore</h3>
        </a>

        <a href="" className="menu-item">
          <span>
            <i className="uil uil-bookmark"></i>
          </span>
          <h3>Bookmarks</h3>
        </a>

        {/* <a className="menu-item" id="theme">
              <span><i className="uil uil-palette"></i></span>
              <h3>Theme</h3>
            </a> */}
        <a href="" className="menu-item">
          <span>
            <i className="uil uil-account"></i>
          </span>
          <h3>Profile</h3>
        </a>
      </div>

      <label for="create-post" className="btn btn-primary">
        Create Post
      </label>
    </div>
  );
};
