import { sendRequest } from "./axiosInstance";

export const getPostsRequest = () => sendRequest("posts")

export const addPostsRequest = (data) => sendRequest("posts", "POST", data)

export const updatePostsRequest = (data) => sendRequest(`posts/${data.id}`, "PUT", data)

export const deletePostsRequest = (id) => sendRequest(`posts/${id}`, "DELETE")