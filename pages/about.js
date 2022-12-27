import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import ImageField from "../components/ImageField";
import Main from "../components/Layouts/Main";
import useUser from "../hooks/useUser";
import { FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

const About = () => {
    const { user, userLoading } = useUser();
    const { name, avatar, email } = user;

    const handelImg = (event) => {
        console.log(event.target.file);
    };

    return (
        <Main title="Instalaren - About">
            {userLoading ? (
                <div></div>
            ) : (
                <>
                    <div className="w-full h-80">
                        <Avatar
                            src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg"
                            alt=""
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                    <div className="relative flex flex-col justify-center items-center gap-6">
                        <ImageField avatar={avatar} handelImg={handelImg} />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold text-center">MD Pahlovi</h3>
                            <h3 className="flex justify-center items-center text-content/70">
                                <FaMapMarkerAlt className="text-lg mr-2" />
                                C&B Road, Barisal, Bangladesh
                            </h3>
                            <h3 className="flex justify-center items-center text-content/70">
                                <FaUniversity className="text-lg mr-2" />
                                Shahid Abdur Rab Serniabat Textile Engineering College
                            </h3>
                        </div>
                        <div className="absolute w-max inline-flex gap-4 left-0 top-8 divide-x-2 divide-edge">
                            <div className="text-center pl-4">
                                <p className="font-bold text-content/70 text-xl">22</p>
                                <p className="text-content/40">Friends</p>
                            </div>
                            <div className="text-center pl-4">
                                <p className="font-bold text-content/70 text-xl">10</p>
                                <p className="text-content/40">Photos</p>
                            </div>
                            <div className="text-center pl-4">
                                <p className="font-bold text-content/70 text-xl">89</p>
                                <p className="text-content/40">Comments</p>
                            </div>
                        </div>
                        <div className="absolute w-max inline-flex gap-4 right-0 top-8">
                            <Button>Connect</Button>
                            <Button>Message</Button>
                        </div>
                        {!avatar ? <Button>Edit Details</Button> : ""}
                    </div>
                </>
            )}
        </Main>
    );
};

export default About;
