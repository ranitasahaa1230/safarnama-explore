import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  LeftSidebar,
  Loader,
  MiddleGrid,
  RightSidebar,
} from "../../components";
import "./Home.css";

export const Home = () => {
  const { loading } = useSelector((state) => state.post);
  return (
    <main>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <LeftSidebar />
            <MiddleGrid />
            <RightSidebar />
          </>
        )}
      </div>
    </main>
  );
};
