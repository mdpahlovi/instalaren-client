import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import ImageField from "./ImageField";
import { getImgUrl } from "../requests/getImgUrl";
import { toast } from "react-toastify";
import { useAuth } from "../hooks/useAuthContext";
import { addPost } from "../requests/posts";

const InputMedia = () => {
    const { authUser } = useAuth();
    const [thumbnail, setThumbnail] = useState("");
    const [loading, setLoading] = useState(false);
    const [imgLoading, setImgLoading] = useState(false);

    const handelImg = (event) => {
        setImgLoading(true);
        const img = event.target.files[0];

        getImgUrl(img)
            .then((data) => {
                setImgLoading(false);
                setThumbnail(data.data.url);
            })
            .catch((error) => toast.error(error.message));
    };

    const handelSubmit = (event) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;
        const date = new Date();
        const post = { title, thumbnail, details, date, user_email: authUser?.email, likes: [], total_likes: 0, comments: [], total_comments: 0 };

        addPost(post)
            .then(({ message }) => {
                setLoading(false);
                setThumbnail("");
                toast.success(message);
            })
            .catch((error) => console.log(error));
    };

    return (
        <form onSubmit={handelSubmit} className="w-full lg:w-[960px] mx-auto space-y-4">
            <div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-8">
                <ImageField size="w-40 h-40" handelImg={handelImg} avatar={thumbnail} loading={imgLoading} />
                <div className="space-y-4">
                    <Input name="title" label="Post Title" />
                    <Textarea name="details" label="Post Details" className="w-max" />
                </div>
            </div>
            <div className="flex justify-center">
                <Button type="submit" className="w-64">
                    {loading ? "Loading..." : "Post Your Feed"}
                </Button>
            </div>
        </form>
    );
};

export default InputMedia;
