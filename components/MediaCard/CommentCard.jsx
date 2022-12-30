import { Button, IconButton } from "@material-tailwind/react";
import ProfileCard from "./ProfileCard";

const CommentCard = ({ commentCard }) => {
    const { user, comment, date } = commentCard;

    return (
        <ProfileCard comment email={user} date={date}>
            <p>{comment}</p>
            <div className="flex items-center gap-2">
                <IconButton size="sm" variant="text" color="gray" className="[&>span]:inline-flex [&>span]:items-center [&>span]:gap-1 text-content/70">
                    <svg className="fill-rose-600" style={{ width: 16, height: 16 }} viewBox="0 0 24 24">
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                    </svg>
                    <span className="font-bold">2</span>
                </IconButton>
                <Button size="sm" variant="text" color="gray" className="text-content">
                    Reply
                </Button>
            </div>
        </ProfileCard>
    );
};

export default CommentCard;
