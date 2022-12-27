import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const ImageField = ({ avatar, handelImg }) => {
    return (
        <section className="relative -mt-36 w-max grid grid-cols-1 gap-8 z-10">
            <div className="w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-background border-2 border-edge flex flex-col justify-center items-center gap-2">
                {avatar ? (
                    <Avatar src={avatar} className="w-full h-full rounded-full" />
                ) : (
                    <>
                        <MdAddPhotoAlternate className="text-8xl text-primary" />
                        <h3 className="hidden sm:block text-2xl font-bold">No file chosen, yet!</h3>
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageField;
