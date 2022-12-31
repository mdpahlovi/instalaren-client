import axios from "axios";
import { apiUrl } from "./url";

// Add a Product
export const addPost = async (post) => {
    const response = await axios.post(`${apiUrl}/post`, post);
    return response.data;
};

export const getALlPost = async () => {
    const response = await axios.get(`${apiUrl}/posts`);
    return response.data;
};

export const getPost = async (id) => {
    const response = await axios.get(`${apiUrl}/post/${id}`);
    return response.data;
};

export const updatePost = async (id, post) => {
    if (post.likes) {
        post.total_likes = post.likes.length;
    } else if (post.comments) {
        post.total_comments = post.comments.length;
    }
    const response = await axios.put(`${apiUrl}/post/${id}`, post);
    return response.data;
};

export const getTopPost = async (size) => {
    const response = await axios.get(`${apiUrl}/top-post?size=${size}`);
    return response.data;
};
