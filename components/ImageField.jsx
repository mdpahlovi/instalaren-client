import { Avatar } from "@material-tailwind/react";
import React from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

const ImageField = ({ avatar, className, size, text, handelImg, loading }) => {
    return (
        <section className={className}>
            <div className={`${size} relative rounded-full bg-background border-2 border-edge flex flex-col justify-center items-center gap-2`}>
                {avatar ? (
                    <Avatar src={avatar} className="w-full h-full rounded-full" />
                ) : (
                    <>
                        <MdAddPhotoAlternate className="text-8xl text-primary" />
                        <h3 className="hidden sm:block text-2xl font-bold">{loading ? "Updating" : text}</h3>
                        <input onChange={handelImg} type="file" name="img" className="absolute w-full h-full rounded-full opacity-0" />
                    </>
                )}
            </div>
        </section>
    );
};

export default ImageField;
