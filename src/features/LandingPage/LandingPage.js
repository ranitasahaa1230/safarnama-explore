import React from "react";
import { heroImage} from "../../assets";
import { useSelector } from "react-redux";
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
              {/* <img className="hero-image" src={logo} alt="Safarnama Logo" /> */}
              <h3 className="hero-image-text">Wanderlust. Traveller. Sonder. </h3>
            </div>

            <h1 className="hero-text">
              <p className="hero-p">Climb some mountains, get lost in the forests and get your dose of vitamin Sea. Why confine the beauty
              of the world only to your eyes? <br/></p>
              <p className="hero-exp">Click. Post. Share. Explore. </p>
              <p className="hero-wait">What are you waiting for? Let the Safar begin!!</p>
            </h1>

            {token ? (
              <Link to="/feed">
                <button className="auth-buttons btn btn-primary">
                  Join Now
                </button>
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
