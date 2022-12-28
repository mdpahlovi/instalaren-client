import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen max-w-5xl mx-auto grid lg:grid-cols-2 items-center gap-16 lg:gap-28 px-6">
            <div>
                <img className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" />
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" />
                <img className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" />
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl text-content font-bold">Looks like you’ve found the doorway to the great nothing</h1>
                <p className="text-content/70">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="text-content/70">Sorry about that! Please visit our Homepage to get where you need to go.</p>
                <div>
                    <Link href="/">
                        <Button>Go back to Homepage</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
