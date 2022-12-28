import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const ImageField = ({ avatar, className, size, text }) => {
    return (
        <section className={className}>
            <div className={`${size} rounded-full bg-background border-2 border-edge flex flex-col justify-center items-center gap-2`}>
                {avatar ? (
                    <Avatar src={avatar} className="w-full h-full rounded-full" />
                ) : (
                    <>
                        <MdAddPhotoAlternate className="text-8xl text-primary" />
                        <h3 className="hidden sm:block text-2xl font-bold">{text}</h3>
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageField;
