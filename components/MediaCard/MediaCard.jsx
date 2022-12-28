import { Avatar, Button, Input } from "@material-tailwind/react";
import { FaComments } from "react-icons/fa";
import CommentCard from "./CommentCard";
import ProfileCard from "./ProfileCard";

const actions = ["like", "comment", "share"];

const MediaCard = () => {
    return (
        <article className="p-6 rounded-lg bg-content/5 flex flex-col space-y-4">
            <ProfileCard>General Electric</ProfileCard>
            <Avatar className="w-full h-64" />
            <div className="grid grid-cols-3 divide-x divide-content/20">
                {actions.map((action, index) => (
                    <div key={index}>
                        <Button size="sm" variant="text" className="text-content" color="gray" fullWidth>
                            {action}
                        </Button>
                    </div>
                ))}
            </div>
            <div>
                <h2 className="-mt-1.5 text-2xl font-bold">Web Design templates Selection</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div>
                <Input label="Comment" icon={<FaComments />} />
            </div>
            <div>
                {[...Array(4)].map((a, i) => (
                    <CommentCard key={i} />
                ))}
                <Button variant="outlined" className="mt-2" fullWidth>
                    Show more comments
                </Button>
            </div>
        </article>
    );
};

export default MediaCard;
