import Link from "next/link";

const ActiveLink = ({ pathname, item }) => {
    const { link, icon } = item;
    const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
    return (
        <Link
            href={href}
            className={`group ${
                pathname === href ? "border-l-2 pl-4 lg:pl-0 lg:border-l-0 lg:border-b-2 border-primary lg:py-[18px] tracking-widest" : "hover:tracking-widest"
            } flex gap-3 lg:gap-0 lg:flex-col lg:items-center transition-all duration-300`}
        >
            <span className={`${pathname === href ? "text-primary" : "group-hover:text-primary"} text-lg`}>{icon}</span>
            {link}
        </Link>
    );
};

export default ActiveLink;
