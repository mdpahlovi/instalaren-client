import { Avatar, Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Main from "../../components/Layouts/Main";
import CommentCard from "../../components/MediaCard/CommentCard";
import { getPost } from "../../requests/posts";
import { FaComments } from "react-icons/fa";
import ProfileCard from "../../components/MediaCard/ProfileCard";

const PostDetail = () => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);
    const { query } = useRouter();

    useEffect(() => {
        getPost(query?.id)
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [query?.id]);

    if (loading) {
        return <Main></Main>;
    } else {
        const { title, details, user_email, date, thumbnail } = post;
        return (
            <Main className="grid grid-cols-1 gap-8">
                <h2 className="text-4xl font-bold text-content">{title}</h2>
                <Avatar src={thumbnail} className="w-screen h-96 lg:max-w-3xl" />
                <div className="grid grid-cols-[1fr_auto] lg:gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="lg:hidden">
                            <ProfileCard comment email={user_email} date={date}>
                                <div className="my-2 flex gap-4">
                                    <Button size="sm" color="light-green">
                                        Connect
                                    </Button>
                                    <Button size="sm">Message</Button>
                                </div>
                            </ProfileCard>
                        </div>
                        <p>{details}</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <div>
                                <span>20</span>Like
                            </div>
                            <div className="border-l-2 sm:border-x-2 border-edge pl-4 sm:px-4">
                                <span>30</span>Comment
                            </div>
                            <div>
                                <Input label="Comment" className="w-72 md:w-96" icon={<FaComments />} />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[...Array(10)].map((a, i) => (
                                <div key={i} className="bg-content/5 p-4 rounded-lg">
                                    <CommentCard />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="hidden w-max h-max shadow-lg rounded-lg p-6 lg:flex flex-col items-center">
                        <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" alt="Bonnie image" variant="circular" className="w-24 h-24" />
                        <h5 className="text-xl font-medium text-content mt-2">Bonnie Green</h5>
                        <span className="text-sm text-content/50">Visual Designer</span>
                        <div className="flex space-x-3 mt-4">
                            <Button color="light-green">Connect</Button>
                            <Button>Message</Button>
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
};

export default PostDetail;
