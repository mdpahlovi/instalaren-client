import axios from "axios";

export const getImgUrl = async (image) => {
    if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=830547d2f0f205ab23f8516091510fb2`;
        const response = await axios.post(url, formData);
        return response.data;
    }
};
