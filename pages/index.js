import Main from "../components/Layouts/Main";
import { Header } from "../components/Header";
import InputMedia from "../components/InputMedia";
import MediaCardLoading from "../components/MediaCard/Loading";
import MediaCard from "../components/MediaCard/MediaCard";
import { getTopPost, updatePost } from "../requests/posts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    //Get top posts
    useEffect(() => {
        getTopPost("3")
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

    return (
        <Main title="Instalaren" className="grid grid-cols-1 gap-12 sm:gap-14 lg:gap-16">
            <Header />
            <div>
                <h1 className="mb-6 text-center text-3xl sm:text-4xl font-bold">Upload Your Post</h1>
                <InputMedia />
            </div>
            <div>
                <h1 className="mb-6 text-center text-3xl sm:text-4xl font-bold">Top Posts</h1>
                <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${loading ? "animate-pulse" : ""}`}>
                    {loading
                        ? [...Array(3)].map((a, i) => <MediaCardLoading key={i} />)
                        : posts.map((post) => <MediaCard key={post._id} post={post} handelReaction={handelReaction} />)}
                </div>
            </div>
        </Main>
    );
}
