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
