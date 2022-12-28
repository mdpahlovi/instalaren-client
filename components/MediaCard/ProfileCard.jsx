import { Avatar } from "@material-tailwind/react";

const ProfileCard = ({ children, comment }) => {
    return (
        <div className={`grid grid-cols-[auto_1fr] ${comment ? "items-start" : "items-center"} gap-4`}>
            <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" variant="circular" />
            <div className="flex flex-col">
                <div className="flex justify-between items-center gap-2">
                    <span className="text-lg font-bold">Eduardo</span>
                    <span className="text-sm text-content/70">25 minutes ago</span>
                </div>
                <div className="-mt-1 text-content/70">{children}</div>
            </div>
        </div>
    );
};

export default ProfileCard;