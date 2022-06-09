import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  fetchAllUsers,
  followUser,
  getAllUsers,
} from "../../features/Profile/allUsersSlice";
import { useToast } from "../../hooks";
import "./RightSidebar.css";

export const RightSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { users, usersLoading } = useSelector(getAllUsers);
  const { showToast } = useToast();

  const [suggestionsList, setSuggestionsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchAllUsers());
        if (response.error) {
          throw new Error("Error in loading all users.");
        }
      } catch (error) {
        showToast(error.message, "error");
      }
    })();
        // eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    setSuggestionsList(
      users.filter(
        (listUser) =>
          listUser.username !== user.username &&
          !user.following?.find(
            (account) => account.username === listUser.username
          )
      )
    );
  }, [users, user]);

  const followClickHandler = async (toFollowId) => {
    try {
      const response = await dispatch(
        followUser({ token, userId: toFollowId, dispatch })
      );
      showToast("Followed User", "success");
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      showToast("Can't follow user. Try again later.", "error");
    }
  };

  return users.length > 0 ? (
    <div className="right">
      <div className="follow">
        <div className="heading">
          <h4 className="suggestions">Suggestions for you</h4>
        </div>
        {usersLoading ? (
          <div>Loading....</div>
        ) : suggestionsList.length === 0 ? (
          <div className="follow">
            <div className="heading">
              <div className="suggestions">No more users to follow</div>
            </div>
          </div>
        ) : (
          suggestionsList.map((suggestUser) => (
            <div className="follow-request" key={suggestUser._id}>
              <div className="profile-photo">
                <img
                  src={suggestUser.profileImage}
                  alt="profile-pic"
                  onClick={() => navigate(`/profile/${suggestUser.username}`)}
                />
              </div>

              <div className="message-body">
                <Link to={`/profile/${suggestUser.username}`} className="suggest-active">
                  <h5>{`${suggestUser.firstName} ${suggestUser.lastName}`}</h5>
                  <p className="text-muted">@{suggestUser.username}</p>
                </Link>
              </div>
              <button
                className="btn btn-follow"
                onClick={() => {
                  followClickHandler(suggestUser._id);
                }}
              >
                Follow
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};
