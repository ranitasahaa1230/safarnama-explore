import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {
  fetchAllUsers,
  followUser,
  getAllUsers,
} from "../../features/Profile/allUsersSlice";
import { useToast } from "../../hooks";
import { BiTrendingUp } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import "./RightSidebar.css";
import { setSortBy } from "../../features/Home/postSlice";
import { actions } from "./actions";

export const RightSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { sortBy } = useSelector((state) => state.post);
  const { users, usersLoading } = useSelector(getAllUsers);
  const { showToast } = useToast();
  const [openSort, showOpenSort] = useState(false);
  const { Default, Newest, Oldest } = actions;

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

  const showSort = () => {
    showOpenSort((prev) => !prev);
  };

  const selectSortHandler = (sortOption) => {
    dispatch(setSortBy(sortOption));
  };

  return (
    <>
      <div className="right">
        <div className="action">
          <h3>Sort By</h3>
          <div className="trending">
            <button
              className="btn-flex"
              value="trending"
              checked={sortBy === "TRENDING"}
              onClick={() => {
                selectSortHandler("TRENDING");
              }}
            >
              <BiTrendingUp size={25} />
              <span>What's Trending</span>{" "}
            </button>

            <div className="sorted">
              <div className="sorted__default" onClick={() => showSort()}>
                <FaSort size={25} />
                <span className="default">Sort By {sortBy} Posts</span>
              </div>

              {openSort && (
                <div className="sorted__videos">
                  <label htmlFor="default" className="filter-categories">
                    <input
                      type="radio"
                      name="uploaded"
                      id="default"
                      className="filter-categories"
                      value="default"
                      checked={sortBy === Default}
                      onChange={() => {
                        selectSortHandler(Default);
                        setTimeout(() => {
                          showSort();
                        }, 1000);
                      }}
                    />
                    Default
                  </label>
                  <br />

                  <label htmlFor="sort-by-latest" className="filter-categories">
                    <input
                      type="radio"
                      name="uploaded"
                      id="sort-by-latest"
                      className="filter-categories"
                      value="sort-by-latest"
                      checked={sortBy === Newest}
                      onChange={() => {
                        selectSortHandler(Newest);
                        setTimeout(() => {
                          showSort();
                        }, 1000);
                      }}
                    />
                    Newest Posts
                  </label>

                  <label
                    htmlFor="sort-by-earliest"
                    className="filter-categories"
                  >
                    <input
                      type="radio"
                      name="uploaded"
                      id="sort-by-earliest"
                      className="filter-categories"
                      value="sort-by-earliest"
                      checked={sortBy === Oldest}
                      onChange={() => {
                        selectSortHandler(Oldest);
                        setTimeout(() => {
                          showSort();
                        }, 1000);
                      }}
                    />
                    Oldest Posts
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {users.length > 0 ? (
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
                      onClick={() =>
                        navigate(`/profile/${suggestUser.username}`)
                      }
                    />
                  </div>

                  <div className="message-body">
                    <Link
                      to={`/profile/${suggestUser.username}`}
                      className="suggest-active"
                    >
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
