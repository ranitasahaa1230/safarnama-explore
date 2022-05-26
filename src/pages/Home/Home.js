import React from "react";
import { LeftSidebar, MiddleGrid, RightSidebar } from "../../components";
import "./Home.css";

export const Home = () => {
  return (
    <main>
      <div class="container">
        <LeftSidebar />
        <MiddleGrid />
        <RightSidebar />
      </div>
    </main>
  );
};
