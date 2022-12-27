import { Avatar, Button, Input } from "@material-tailwind/react";
import React from "react";
import { FaComments } from "react-icons/fa";
import CommentCard from "./CommentCard";
import ProfileCard from "./ProfileCard";

const MediaCard = () => {
    return (
        <article className="p-6 rounded-lg bg-content/10 flex flex-col">
            <ProfileCard>General Electric</ProfileCard>
            <h2 className="text-2xl font-bold">Web Design templates Selection</h2>
            <div className="py-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="py-4">
                <a className="inline-flex items-center" href="#">
                    <span className="mr-2">
                        <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                        </svg>
                    </span>
                    <span className="text-lg font-bold">34</span>
                </a>
            </div>
            <div className="relative">
                <Input label="Comment" icon={<FaComments />} />
            </div>
            <div className="pt-6">
                {[...Array(4)].map((a, i) => (
                    <CommentCard key={i} />
                ))}
                <Button variant="outlined" fullWidth>
                    Show more comments
                </Button>
            </div>
        </article>
    );
};

export default MediaCard;
