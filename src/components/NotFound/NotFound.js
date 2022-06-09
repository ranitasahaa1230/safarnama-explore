import React from "react";
import { Link } from "react-router-dom";
import { error } from "../../assets";
import { useDocumentTitle } from "../../hooks";
import "./NotFound.css";

export const NotFound = () => {
  useDocumentTitle("Not Found Page");
  return (
    <div className="section__page">
      <div className="not__found">
        <img src={error} alt="error" />
        <div className="error-details">
          Oops!! You have entered a wrong URL.😕{"  "}
        </div>
        <Link to="/feed" className="span__not">
          {" "}
          Go Back!
        </Link>
      </div>
    </div>
  );
};
