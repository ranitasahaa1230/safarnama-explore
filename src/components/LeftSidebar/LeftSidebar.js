import React from "react";
import { profile4 } from "../../assets";
import "./LeftSidebar.css";

export const LeftSidebar = () => {
  return (
    <div class="left">
      <a class="profile">
        <div class="profile-photo">
          <img src={profile4} />
        </div>
        <div class="handle">
          <h4 class="">Ranita Saha</h4>
          <p class="text-muted">@Ifullofsunshine</p>
        </div>
      </a>

      <div class="sidebar">
        <a class="menu-item active">
          <span>
            <i class="uil uil-home"></i>
          </span>
          <h3>Home</h3>
        </a>
        <a class="menu-item">
          <span>
            <i class="uil uil-compass"></i>
          </span>
          <h3>Explore</h3>
        </a>

        <a class="menu-item">
          <span>
            <i class="uil uil-bookmark"></i>
          </span>
          <h3>Bookmarks</h3>
        </a>

        {/* <a class="menu-item" id="theme">
              <span><i class="uil uil-palette"></i></span>
              <h3>Theme</h3>
            </a> */}
        <a class="menu-item">
          <span>
            <i class="uil uil-account"></i>
          </span>
          <h3>Profile</h3>
        </a>
      </div>

      <label for="create-post" class="btn btn-primary">
        Create Post
      </label>
    </div>
  );
};
