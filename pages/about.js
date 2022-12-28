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
                <div className="animate-pulse">
                    <div className="w-full h-64 lg:h-80 bg-content/10 rounded-lg"></div>
                    <div className="relative flex flex-col justify-center items-center gap-6">
                        <section className="relative -mt-36 w-max grid grid-cols-1 gap-8 z-10">
                            <div className="w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-content/10 border-2 border-edge"></div>
                        </section>
                        <div className="flex flex-col items-center gap-3">
                            <h3 className="w-40 h-8 bg-content/10 rounded-lg"></h3>
                            <h3 className="w-64 sm:w-80 h-6 bg-content/10 rounded-lg"></h3>
                            <h3 className="w-80 sm:w-96 h-6 bg-content/10 rounded-lg"></h3>
                        </div>
                        <div className="lg:absolute flex gap-4 left-0 top-8 h-14">
                            <div className="w-20 bg-content/10 rounded-lg"></div>
                            <div className="w-20 bg-content/10 rounded-lg"></div>
                            <div className="w-20 bg-content/10 rounded-lg"></div>
                        </div>
                        <div className="lg:absolute flex gap-4 right-0 top-8 h-10">
                            <div className="w-[108px] bg-content/10 rounded-lg"></div>
                            <div className="w-[108px] bg-content/10 rounded-lg"></div>
                        </div>
                        <div className="w-32 h-10 bg-content/10 rounded-lg"></div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="w-full h-64 lg:h-80">
                        <Avatar
                            src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg"
                            alt=""
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                    <div className="relative flex flex-col justify-center items-center gap-6">
                        <ImageField
                            avatar={avatar}
                            handelImg={handelImg}
                            className="relative -mt-24 sm:-mt-36 w-max z-10"
                            size="w-48 sm:w-80 h-48 sm:h-80"
                            text="Choose your profile"
                        />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold text-center">MD Pahlovi</h3>
                            <h3 className="flex justify-center items-center text-content/70 text-center">
                                <FaMapMarkerAlt className="hidden sm:inline-block text-lg mr-2" />
                                C&B Road, Barisal, Bangladesh
                            </h3>
                            <h3 className="flex justify-center items-center text-content/70 text-center">
                                <FaUniversity className="hidden sm:inline-block text-lg mr-2" />
                                Shahid Abdur Rab Serniabat Textile Engineering College
                            </h3>
                        </div>
                        <div className="lg:absolute flex gap-4 left-0 top-8 divide-x-2 divide-edge">
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
                        <div className="lg:absolute flex gap-4 right-0 top-8">
                            <Button color="light-green">Connect</Button>
                            <Button>Message</Button>
                        </div>
                        {!avatar ? <Button color="red">Edit Details</Button> : ""}
                    </div>
                </>
            )}
        </Main>
    );
};

export default About;
