import React from "react";
import { heroImage, logo } from "../../assets";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export const LandingPage = () => {
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

            <div className="auth-buttons">
              <Link to="/signup" className="signup-btn">
                Join Now
              </Link>

              <Link to="/login" className="btn-primary-link">
                Already have an account?{" "}
                <span className="underline">Login</span>
              </Link>
            </div>
          </div>

          <div className="hero-logo-image">
            <img src={heroImage} alt="Hero logo" className="hero-logo" />
          </div>
        </div>
      </section>
    </>
  );
};
