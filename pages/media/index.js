import { Avatar, Card, CardBody, CardHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Main from "../../components/Layouts/Main";
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
        console.log(id, post);
        updatePost(id, post)
            .then((data) => {
                setRefresh(!refresh);
                toast.success("Comment Updated");
            })
            .catch(({ message }) => toast.error(message));
    };

    if (loading) {
        return (
            <Main title="Instalaren - Media" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-pulse">
                {[...Array(3)].map((a, i) => (
                    <div key={i}>
                        <div className="pt-6"></div>
                        <Card className="flex flex-col bg-background">
                            <CardHeader color="gray" className="relative h-56">
                                <Avatar className="w-full h-64" />
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                                    <Avatar variant="circular" className="bg-content/10 rounded-lg" />
                                    <div className="flex flex-col gap-2">
                                        <div className="grid grid-cols-2 items-center gap-8">
                                            <span className="h-7 bg-content/10 rounded-lg"></span>
                                            <span className="h-5 bg-content/10 rounded-lg"></span>
                                        </div>
                                        <div className="w-48 h-5 bg-content/10 rounded-lg"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="w-32 h-8 bg-content/10 rounded-lg"></h2>
                                    <p className="w-full h-[72px] bg-content/10 rounded-lg"></p>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[...Array(3)].map((a, i) => (
                                        <div key={i} className="w-full h-[34px] bg-content/10 rounded-lg"></div>
                                    ))}
                                </div>
                                <div>
                                    <div className="w-full h-10 bg-content/10 rounded-lg"></div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
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
