import { Avatar } from "@material-tailwind/react";
import { formatDistance, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { getUser } from "../../requests/user";

const ProfileCard = ({ children, comment, email, date }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const dateIs = parseISO(date);

    const dayArray = dateIs.toDateString().split(" ");
    const day = `${dayArray[1]} ${dayArray[2]} ${dayArray[3]}`;
    const timeArray = dateIs.toTimeString().split(":");
    const time = `${timeArray[0]}:${timeArray[1]}`;

    useEffect(() => {
        getUser(email)
            .then((data) => {
                setLoading(false);
                setUser(data);
            })
            .catch((error) => console.log(error));
    }, [email]);

    if (loading) {
        return (
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
        );
    } else {
        const { name, avatar, location } = user;
        return (
            <div className={`grid grid-cols-[auto_1fr] ${comment ? "items-start" : "items-center"} gap-4`}>
                <Avatar src={avatar} variant="circular" />
                <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-2">
                        <span className="text-lg text-content font-bold">{name}</span>
                        <span className="text-sm text-content/70">{`${day} at ${time}`}</span>
                    </div>
                    <div className="-mt-1 text-content/70">{comment ? children : location ? location : ""}</div>
                </div>
            </div>
        );
    }
};

export default ProfileCard;
