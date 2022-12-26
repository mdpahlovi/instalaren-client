import { useState, useEffect } from "react";
import { MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { useRouter } from "next/router";
import ActiveLink from "../ActiveLink";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 flex flex-col gap-2 lg:mb-0 lg:flex-row lg:items-center lg:gap-6">
            <ActiveLink pathname={pathname} href="/">
                Home
            </ActiveLink>
            <ActiveLink pathname={pathname} href="/media">
                Media
            </ActiveLink>
            <ActiveLink pathname={pathname} href="/message">
                Message
            </ActiveLink>
            <ActiveLink pathname={pathname} href="/about">
                About
            </ActiveLink>
        </ul>
    );

    return (
        <nav className="border-b border-edge bg-background">
            <div className="container relative z-10 mx-auto h-16 px-6 lg:h-20">
                <div className="flex h-full items-center justify-between">
                    <Image src={Logo} alt="logo" className="w-40 lg:w-44" />
                    <div className="hidden lg:block">{navList}</div>
                    <div className="hidden items-center gap-4 lg:inline-flex">
                        <Link href="signin">
                            <Button variant="gradient" size="sm">
                                SignIn
                            </Button>
                        </Link>
                        <ThemeSwitcher />
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav className="rounded-lg bg-background p-6 shadow-lg lg:hidden" open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth>
                        <span>Buy Now</span>
                    </Button>
                </MobileNav>
            </div>
        </nav>
    );
}
