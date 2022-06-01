import React from "react";
import { LeftSidebar, MiddleGrid, RightSidebar } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <MiddleGrid />
        <RightSidebar />
      </div>
    </main>
  );
};
