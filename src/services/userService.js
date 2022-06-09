import axios from "axios";

export const fetchUserProfileService = (username) => {
  return axios.get(`/api/users/${username}`);
};

export const fetchUserPostsService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

export const updateUserProfileService = (token, userData) => {
  return axios.post(
    "/api/users/edit",
    { userData },
    {
      headers: { authorization: token },
    }
  );
};

export const followUserService = (token, userId) => {
  return axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const unfollowUserService = (token, userId) => {
  return axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const fetchAllUsersService = () => {
  return axios.get("/api/users");
};
