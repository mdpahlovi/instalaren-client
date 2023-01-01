import { Avatar, Button, Input } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Main from "../../components/Layouts/Main";
import CommentCard from "../../components/MediaCard/CommentCard";
import { getPost, updatePost } from "../../requests/posts";
import { FaComments } from "react-icons/fa";
import ProfileCard from "../../components/MediaCard/ProfileCard";
import { useAuth } from "../../hooks/useAuthContext";
import { isLike } from "../../utilities/isLike";
import { CirclesWithBar } from "react-loader-spinner";
import { Protect } from "../../components/ProtectedRoute";

const PostDetail = () => {
    const [post, setPost] = useState({});
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const { query } = useRouter();
    const { authUser } = useAuth();

    useEffect(() => {
        getPost(query?.id)
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch(({ message }) => toast.error(message));
    }, [query?.id, refresh]);

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
            <Main>
                <div className="w-full h-80 flex justify-center items-center">
                    <CirclesWithBar
                        height="200"
                        width="200"
                        color="#A600FF"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        outerCircleColor=""
                        innerCircleColor=""
                        barColor=""
                        ariaLabel="circles-with-bar-loading"
                    />
                </div>
            </Main>
        );
    } else {
        const { _id, title, details, user_email, date, thumbnail, comments, likes } = post;
        return (
            <Main className="grid grid-cols-1 gap-8">
                <h2 className="text-4xl font-bold text-content col-span-full">{title}</h2>
                <Avatar src={thumbnail} className="w-full lg:max-w-3xl h-96" />
                <div className="flex flex-col gap-4">
                    <div className="sm:max-w-screen-sm">
                        <ProfileCard comment email={user_email} date={date}>
                            <div className="my-2 inline-flex gap-4">
                                <Button size="sm" color="light-green">
                                    Connect
                                </Button>
                                <Button size="sm">Message</Button>
                            </div>
                        </ProfileCard>
                    </div>
                    <p>{details}</p>
                    <div className="flex flex-col md:flex-row md:items-center md:w-max gap-4">
                        <div className="flex gap-4">
                            <Button
                                size="sm"
                                onClick={() => {
                                    if (authUser?.uid) {
                                        handelReaction(_id, { likes: isLike(authUser?.email, likes) });
                                    } else {
                                        push("/signin");
                                    }
                                }}
                                variant="outlined"
                                className="text-content w-max h-max"
                                color="gray"
                                fullWidth
                            >
                                {likes.length !== 0 ? (
                                    <>
                                        <span className="text-primary mr-1">{`(${likes.length})`}</span>
                                        <span className={likes.find((like) => like.user === authUser?.email) ? "text-primary" : ""}>Likes</span>
                                    </>
                                ) : (
                                    "Like"
                                )}
                            </Button>
                            <Button size="sm" variant="outlined" className="text-content w-max h-max" color="gray" fullWidth>
                                {comments.length !== 0 ? (
                                    <>
                                        <span className="text-primary mr-1">{`(${comments.length})`}</span>
                                        <span className={comments.find((comment) => comment.user === authUser?.email) ? "text-primary" : ""}>Comments</span>
                                    </>
                                ) : (
                                    "comment"
                                )}
                            </Button>
                        </div>
                        <Input
                            onChange={(event) => setComment(event.target.value)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    if (authUser?.uid) {
                                        handelReaction(_id, { comments: [...comments, { user: authUser?.email, comment: comment, date: new Date() }] });
                                    } else {
                                        push("/signin");
                                    }
                                }
                            }}
                            label="Comment"
                            icon={
                                <FaComments
                                    onClick={() => {
                                        if (authUser?.uid) {
                                            handelReaction(_id, {
                                                comments: [...comments, { user: authUser?.email, comment: comment, date: new Date() }],
                                            });
                                        } else {
                                            push("/signin");
                                        }
                                    }}
                                />
                            }
                        />
                    </div>
                    <div className="mt-2 grid md:grid-cols-2 gap-4">
                        {comments.map((commentCard, i) => (
                            <div key={i} className="bg-content/5 p-4 rounded-lg">
                                <CommentCard commentCard={commentCard} />
                            </div>
                        ))}
                    </div>
                </div>
            </Main>
        );
    }
};

export default Protect(PostDetail);
