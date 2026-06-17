import axios from "axios";

export const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data;
};

export const createPost = async (newPost) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );

  return response.data;
};