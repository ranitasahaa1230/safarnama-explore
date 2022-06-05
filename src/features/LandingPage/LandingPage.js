import React from "react";
import { heroImage, logo } from "../../assets";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <section className="hero">
        <div className="flex-hero">
          <div className="hero-text-content">
            <div className="flex-img">
              <img className="hero-image" src={logo} alt="Talk It Out Logo" />
              <h3 className="hero-image-text">Talk It Out</h3>
            </div>

            <h1 className="hero-text">Lose your mind and find your soul!</h1>

            {token ? (
              <Link to="/feed">
                <button className="auth-buttons btn btn-primary">Join Now</button>
              </Link>
            ) : (
              /* <Link to="/login" className="btn-primary-link">
                Already have an account?{" "}
                <span className="underline">Login</span>
              </Link> */
              <Link to="/login">
                <button className="btn btn-primary">
                  {/* <Link to="/signup" className="signup-btn"> */}
                  Join Now
                </button>
                {/* </Link> */}
              </Link>
            )}
          </div>

          <div className="hero-logo-image">
            <img src={heroImage} alt="Hero logo" className="hero-logo" />
          </div>
        </div>
      </section>
    </>
  );
};
