import Link from "next/link";
import { FaReddit, FaFacebook, FaGithub } from "react-icons/fa";

const nav_items = ["Home", "About", "Teams", "Privacy", "Cookies"];
const year = new Date().getFullYear();
const socials = [
    { link: "", icon: <FaReddit /> },
    { link: "", icon: <FaFacebook /> },
    { links: "", icon: <FaGithub /> },
];

export function Footer() {
    return (
        <footer className="border-t border-edge">
            <div className="container p-6 mx-auto">
                <div className="text-center space-y-6">
                    <Link href="/" className="text-3xl font-bold">
                        Instalaren
                    </Link>
                    <div className="flex flex-wrap justify-center gap-y-4">
                        {nav_items.map((item, index) => (
                            <Link
                                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                                key={index}
                                className="mx-4 text-content/70 hover:text-primary transition-all duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="border-t border-edge mt-6 pt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                    <p className="text-content/70">© Copyright 2021. All Rights Reserved.</p>
                    <div className="flex text-xl">
                        {socials.map(({ link, icon }, index) => (
                            <a key={index} href={link} className="mx-4 text-content/70 hover:text-primary transition-colors duration-300">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
