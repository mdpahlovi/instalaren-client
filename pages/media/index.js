import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Main from "../../components/Layouts/Main";
import MediaCard from "../../components/MediaCard/MediaCard";
import { getALlPost } from "../../requests/posts";

const Media = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getALlPost()
            .then((data) => {
                setLoading(false);
                setPosts(data);
            })
            .catch(({ message }) => toast.error(message));
    }, []);

    return (
        <Main title="Instalaren - Media" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post) => (
                <MediaCard key={post._id} post={post} />
            ))}
        </Main>
    );
};

export default Media;
