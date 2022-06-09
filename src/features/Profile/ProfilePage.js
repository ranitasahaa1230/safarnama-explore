import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftSidebar, RightSidebar } from "../../components";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components/MiddleGrid/components/PostCard";
import { fetchUserPosts, fetchUserProfile, getUserProfile } from "./profileSlice";
import { useToast } from "../../hooks";
import { followUser, getAllUsers, unfollowUser } from "./allUsersSlice";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { userProfile, userPosts } = useSelector(getUserProfile);
  const { users } = useSelector(getAllUsers);
  const { showToast } = useToast();
  const {
    _id,
    firstName,
    lastName,
    followers,
    following,
    bio,
    websiteUrl,
    profileImage,
    original_filename,
  } = userProfile;

  const [userPostsLoading, setUserPostsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(
          fetchUserProfile({ username: username })
        );
        if (response.error) {
          throw new Error("Error in loading user profile");
        }
      } catch (error) {
        showToast(error.message,"error");
      }
    })();
    // eslint-disable-next-line
  }, [users, username]);

  useEffect(() => {
    (async () => {
      try {
        const response = await dispatch(fetchUserPosts({ username: username }));
        if (response.error) {
          throw new Error("Error in loading user posts");
        }
        setUserPostsLoading(false);
      } catch (error) {
        showToast(error.message, "error");
      }
    })();
    // eslint-disable-next-line
  }, [userPosts]);

  const checkFollowed = () =>
    followers?.some((listUser) => listUser.username === user.username);

  const followUnfollowHandler = async () => {
    try {
      const response = checkFollowed()
        ? await dispatch(unfollowUser({ token, userId: _id, dispatch }))
        : await dispatch(followUser({ token, userId: _id, dispatch }));
      if (response.error) {
        throw new Error(response.error);
      }
    } catch (error) {
      showToast("Can't follow user. Try again later.", "error");
    }
  };

  const editProfileHandler = () => {
    // dispatch(SHOW_PROFILE_MODAL());
  };


  return (
    <main>
      <div className="container">
        <LeftSidebar />
        <div className="middle">
          <div className="user-edit">
            <div className="profile-pic">
              {profileImage ? (
                <img
                  loading="lazy"
                  src={profileImage}
                  alt={original_filename}
                />
              ) : (
                <></>
              )}
            </div>

            <div className="ingo-edit">
              <div className="flex-edit">
                <div className="user-date">
                  <div>
                    <h3 className="">{`${firstName} ${lastName}`}</h3>
                    <span className="text-muted">@{username}</span>
                  </div>
                </div>

                {user.username === username && (
                <button
                  className="btn btn-primary"
                  onClick={editProfileHandler}
                >
                  Edit Profile
                </button>)}
                {user.username !== username && (
                <button
                  className="btn btn-primary"
                  onClick={followUnfollowHandler}
                >
                  {checkFollowed() ? "Following" : "Follow"}
                </button>
              )}
              </div>

              <div className="desc-edit">
                <div>
                  {bio}
                  <br />
                </div>
                <div className="text-bold">
                  Website:
                  <a target="_blank" rel="noreferrer" href={websiteUrl}>
                    {" "}
                    {websiteUrl}
                  </a>
                </div>
              </div>

              <div className="followers-edit">
                <span>{userPostsLoading ? 0 : userPosts.length} Posts</span>
                {/* <span>{followers.length} Followers</span>
                <span>{following.length} Following</span> */}
              </div>
            </div>
          </div>

          <div className="feeds">
            {userPosts.length > 0 ? (
              userPosts.map((post) => <PostCard key={post._id} post={post} />)
            ) : (
              <div className="text-centre">
                <p className="text-bold">No Posts Yet</p>
              </div>
            )}
          </div>
        </div>

        <RightSidebar />
      </div>
    </main>
  );
};
