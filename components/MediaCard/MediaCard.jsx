import { Avatar, Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaComments } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuthContext";
import CommentCard from "./CommentCard";
import ProfileCard from "./ProfileCard";

const MediaCard = ({ post, handelReaction }) => {
    const [open, setOpen] = useState(true);
    const [comment, setComment] = useState("");
    const { authUser } = useAuth();
    const { _id, title, details, thumbnail, date, user_email, comments, likes } = post;
    const [size, setSize] = useState(2);
    const { push } = useRouter();

    const isLike = (email, likes) => {
        if (likes.length !== 0) {
            const currentUser = likes.find((like) => like.user === email);
            const restUser = likes.filter((like) => like.user !== email);
            if (currentUser?.like) {
                return [...restUser];
            } else {
                return [...likes, { user: email, like: "1" }];
            }
        } else {
            return [{ user: email, like: "1" }];
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <Avatar src={thumbnail} className="w-full h-64" />
            <div className="space-y-4">
                <ProfileCard email={user_email} date={date}></ProfileCard>
                <div>
                    <h2 className="-mt-1.5 text-2xl text-content font-bold">{title}</h2>
                    <p className="text-content/70 line-clamp-3">{details}</p>
                </div>
                <div className="grid grid-cols-[auto_auto_auto] gap-4">
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
                        className="text-content"
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
                    <Button size="sm" onClick={() => setOpen(!open)} variant="outlined" className="text-content" color="gray" fullWidth>
                        {comments.length !== 0 ? (
                            <>
                                <span className="text-primary mr-1">{`(${comments.length})`}</span>
                                <span className={comments.find((comment) => comment.user === authUser?.email) ? "text-primary" : ""}>Comments</span>
                            </>
                        ) : (
                            "comment"
                        )}
                    </Button>
                    <Link href={`/media/${_id}`}>
                        <Button size="sm" variant="outlined" className="text-content" color="gray" fullWidth>
                            Details
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={`${open ? "hidden" : "block"} space-y-4`}>
                <div>
                    <Input
                        onChange={(event) => setComment(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && authUser?.uid) {
                                handelReaction(_id, { comments: [...comments, { user: authUser?.email, comment: comment, date: new Date() }] });
                            } else {
                                push("/signin");
                            }
                        }}
                        label="Comment"
                        icon={
                            <FaComments
                                onClick={() => {
                                    if (authUser?.uid) {
                                        handelReaction(_id, { comments: [...comments, { user: authUser?.email, comment: comment, date: new Date() }] });
                                    } else {
                                        push("/signin");
                                    }
                                }}
                            />
                        }
                    />
                </div>
                <div>
                    {comments.slice(0, size).map((commentCard, i) => (
                        <CommentCard key={i} commentCard={commentCard} />
                    ))}
                    {comments.length >= 2 ? (
                        <Button variant="outlined" onClick={() => setSize(size === 2 ? (comments ? comments.length : 0) : 2)} className="mt-2" fullWidth>
                            {size === 2 ? "Show more comments" : "Show less comments"}
                        </Button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
