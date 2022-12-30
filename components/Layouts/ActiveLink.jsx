import Link from "next/link";
import { useAuth } from "../../hooks/useAuthContext";

const ActiveLink = ({ pathname, item }) => {
    const { authUser } = useAuth();
    const { link, icon } = item;

    const isHref = (link, email) => {
        if (link === "Home") {
            return "/";
        } else if (link === "About") {
            return `/about/${email}`;
        } else {
            return `/${link.toLowerCase()}`;
        }
    };

    return (
        <Link
            href={isHref(link, authUser?.email)}
            className={`group ${
                pathname === isHref(link, authUser?.email)
                    ? "border-l-2 pl-4 lg:pl-0 lg:border-l-0 lg:border-b-2 border-primary lg:py-[18px] tracking-widest"
                    : "hover:tracking-widest"
            } flex gap-3 lg:gap-0 lg:flex-col lg:items-center transition-all duration-300`}
        >
            <span className={`${pathname === isHref(link, authUser?.email) ? "text-primary" : "group-hover:text-primary"} text-lg`}>{icon}</span>
            {link}
        </Link>
    );
};

export default ActiveLink;
