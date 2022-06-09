import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./LeftSidebar.css";
import { logoutUser } from "../../features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../../hooks";

export const LeftSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="left">
      <Link to="/profile" className="profile">
        <div className="profile-photo">
          <img src={user.profileImage} alt="profile-pic" />
        </div>
        <div className="handle">
          <h4 className="profile-text">
            {user.firstName} {user.lastName}
          </h4>
          <p className="text-muted">@{user.username}</p>
        </div>
      </Link>

      <div className="sidebar">
        <NavLink to="/feed" className="menu-item">
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

        <NavLink to={`/profile/${user.username}`} className="menu-item">
          <span>
            <i className="fa-solid fa-user"></i>{" "}
          </span>
          <h3>Profile</h3>
        </NavLink>

        <li
          className="menu-item"
          onClick={() => {
            dispatch(logoutUser());
            navigate("/");
            showToast("Logged Out !", "success");
          }}
        >
          <span>
            <i className="fa-solid fa-right-from-bracket"></i>{" "}
          </span>
          <h3>Logout</h3>
        </li>
      </div>

      <button htmlFor="create-post" id="add-post" className="btn btn-primary">
        Create Post
      </button>
    </div>
  );
};
