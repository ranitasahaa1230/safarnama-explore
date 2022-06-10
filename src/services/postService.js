import axios from "axios";

export const getAllPostService = () => axios.get("/api/posts");

export const getUserPostService = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const addPostService = (postData, token) =>
  axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

 export const editPostService = (token, postData, postId) => {
    return axios.post(
      `/api/posts/edit/${postId}`,
      { postData },
      {
        headers: { authorization: token },
      }
    );
  };

export const likePostService = (postId, token) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const dislikePostService = (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

  export const fetchSinglePostService = (postId) => {
    return axios.get(`/api/posts/${postId}`);
  };
  