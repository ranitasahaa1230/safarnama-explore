import React from "react";
import { logo } from "../../assets";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../../features/theme-context";
import { RiMoonFill } from "react-icons/ri";
import { GiSunflower } from "react-icons/gi";
import "./Navbar.css";

export const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { theme, changeTheme } = useTheme();

  return (
    <>
        <nav>
          <div className="container">
            <div className="flex-hub">
              <Link to="/">
                <img src={logo} alt="logo" className="header-logo" />
              </Link>
              <Link to="/" className="header-name">
                <h2 className="log">Safarnama</h2>
              </Link>
            </div>

            {token && (
              <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search your friends" />
              </div>
            )}
            <div className="create">
              <div className="mode__icons" onClick={changeTheme}>
                {theme ? (
                  <RiMoonFill size={32} />
                ) : (
                  <GiSunflower size={32} />
                )}
              </div>

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
    </>
  );
};
