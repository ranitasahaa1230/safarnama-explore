import React from "react";
import { LeftSidebar, RightSidebar } from "../../components/";

export const Profile = () => {
  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="middle">

          <h3 className="bookmarks">Your Bookmarks</h3>
          <div className="no-bookmarks">

          </div>
        </div>

        <RightSidebar />
      </div>
    </main>
  );
};
