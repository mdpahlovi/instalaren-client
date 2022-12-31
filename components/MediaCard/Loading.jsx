import { Avatar } from "@material-tailwind/react";
import React from "react";

const MediaCardLoading = () => {
    return (
        <div className="flex flex-col bg-background animate-pulse space-y-4">
            <Avatar className="w-full h-64 bg-content/10 rounded-lg" />
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
            <div className="space-y-2">
                <h2 className="w-32 h-8 bg-content/10 rounded-lg"></h2>
                <p className="w-full h-[72px] bg-content/10 rounded-lg"></p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[...Array(3)].map((a, i) => (
                    <div key={i} className="w-full h-[34px] bg-content/10 rounded-lg"></div>
                ))}
            </div>
            <div>
                <div className="w-full h-10 bg-content/10 rounded-lg"></div>
            </div>
        </div>
    );
};

export default MediaCardLoading;
