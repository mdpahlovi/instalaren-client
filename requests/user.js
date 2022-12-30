// Authenticates User By JWT
import axios from "axios";
import { toast } from "react-toastify";
import { apiUrl } from "./url";

export const setAuthUser = (user, name, img) => {
    const currentUser = { email: user.email };
    if (name && img) {
        currentUser.name = name;
        currentUser.avatar = img;
    } else if (name && !img) {
        currentUser.name = name;
        currentUser.avatar = "https://cdn-icons-png.flaticon.com/512/16/16363.png";
    } else {
        currentUser.name = user.displayName;
        currentUser.avatar = user.photoURL;
    }

    axios
        .put(`${apiUrl}/user/${user?.email}`, currentUser)
        .then(({ data }) => localStorage.setItem("instalaren", data.token))
        .catch(({ message }) => toast.error(message));
};

export const getUser = async (email) => {
    const res = await axios.get(`${apiUrl}/user/${email}`);
    return res.data;
};
