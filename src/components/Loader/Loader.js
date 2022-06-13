import React from "react";
import { Plane } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <Plane ariaLabel="loading-indicator" className="loading" />{" "}
    </div>
  );
};
