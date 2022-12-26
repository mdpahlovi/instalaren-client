import Link from "next/link";

const ActiveLink = ({ pathname, href, children }) => {
    return (
        <Link href={href} className={`${pathname === href ? "font-bold" : ""}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;
