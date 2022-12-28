import { Avatar } from "@material-tailwind/react";
import { format, parseISO } from "date-fns";
import formatDistance from "date-fns/formatDistance";

const ProfileCard = ({ children, comment, email, date }) => {
    return (
        <div className={`grid grid-cols-[auto_1fr] ${comment ? "items-start" : "items-center"} gap-4`}>
            <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" variant="circular" />
            <div className="flex flex-col">
                <div className="flex justify-between items-center gap-2">
                    <span className="text-lg text-content font-bold">Eduardo</span>
                    <span className="text-sm text-content/70"></span>
                </div>
                <div className="-mt-1 text-content/70">{children}</div>
            </div>
        </div>
    );
};

export default ProfileCard;
