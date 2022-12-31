import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Main from "../../components/Layouts/Main";
import MediaCardLoading from "../../components/MediaCard/Loading";
import MediaCard from "../../components/MediaCard/MediaCard";
import { getALlPost, updatePost } from "../../requests/posts";

const Media = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getALlPost()
            .then((data) => {
                setLoading(false);
                setPosts(data);
            })
            .catch(({ message }) => toast.error(message));
    }, [refresh]);

    const handelReaction = (id, post) => {
        updatePost(id, post)
            .then((data) => {
                setRefresh(!refresh);
                toast.success("Reaction Updated");
            })
            .catch(({ message }) => toast.error(message));
    };

    if (loading) {
        return (
            <Main title="Instalaren - Media" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-pulse">
                {[...Array(3)].map((a, i) => (
                    <MediaCardLoading key={i} />
                ))}
            </Main>
        );
    } else {
        return (
            <Main title="Instalaren - Media" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <MediaCard key={post._id} post={post} handelReaction={handelReaction} />
                ))}
            </Main>
        );
    }
};

export default Media;
