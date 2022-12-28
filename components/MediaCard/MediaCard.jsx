import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";
import { FaComments } from "react-icons/fa";
import CommentCard from "./CommentCard";
import ProfileCard from "./ProfileCard";

const MediaCard = ({ post }) => {
    const [open, setOpen] = useState(true);
    const { _id, title, details, thumbnail, date, user_email } = post;
    return (
        <div>
            <div className="pt-6"></div>
            <Card className="flex flex-col bg-background">
                <CardHeader className="relative h-56">
                    <Avatar src={thumbnail} className="w-full h-64" />
                </CardHeader>
                <CardBody className="space-y-4">
                    <ProfileCard email={user_email} date={date}>
                        General Electric
                    </ProfileCard>
                    <div>
                        <h2 className="-mt-1.5 text-2xl text-content font-bold">{title}</h2>
                        <p className="text-content/70 line-clamp-3">{details}</p>
                    </div>
                    <div className="grid grid-cols-[auto_auto_auto] gap-4">
                        <Button size="sm" variant="outlined" className="text-content" color="gray" fullWidth>
                            Link
                        </Button>
                        <Button size="sm" onClick={() => setOpen(!open)} variant="outlined" className="text-content" color="gray" fullWidth>
                            Comment
                        </Button>
                        <Link href={`/media/${_id}`}>
                            <Button size="sm" variant="outlined" className="text-content" color="gray" fullWidth>
                                Details
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Input label="Comment" icon={<FaComments />} />
                    </div>
                </CardBody>
                <CardFooter className={`pt-0 ${open ? "hidden" : "block"}`}>
                    <div>
                        {[...Array(4)].map((a, i) => (
                            <CommentCard key={i} />
                        ))}
                        <Button variant="outlined" className="mt-2" fullWidth>
                            Show more comments
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default MediaCard;
