import { Avatar, Button } from "@material-tailwind/react";

export const Header = () => {
    return (
        <div className="grid xl:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 max-w-xl">
                <p className="w-max px-5 py-2.5 uppercase font-bold text-xs tracking-wider text-content bg-primary/20 rounded-full">Rated #2 on G2</p>
                <h1 className="text-5xl md:text-6xl text-content font-bold">Get connected with your target audience</h1>
                <p className="text-content/70">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                    veniam consequat.
                </p>
                <div className="space-x-4">
                    <Button color="gray" className="bg-content text-background">
                        Connect Now
                    </Button>
                    <Button color="gray" className="bg-content text-background">
                        See Media
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="hidden md:flex flex-col items-end gap-4">
                    <div className="w-max h-max shadow-lg rounded-lg p-6 flex flex-col items-center">
                        <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" alt="Bonnie image" variant="circular" className="w-24 h-24" />
                        <h5 className="text-xl font-medium text-content mt-2">Bonnie Green</h5>
                        <span className="text-sm text-content/50">Visual Designer</span>
                        <div className="flex space-x-3 mt-4">
                            <Button color="light-green">Connect</Button>
                            <Button>Message</Button>
                        </div>
                    </div>
                    <div className="divide-x-2 divide-edge rounded-lg shadow-lg p-6 flex gap-4">
                        <div className="text-center">
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
                </div>
                <div className="w-max h-max shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <Avatar src="https://randomuser.me/api/portraits/men/9.jpg" alt="Bonnie image" variant="circular" className="w-24 h-24" />
                    <h5 className="text-xl font-medium text-content mt-2">Bonnie Green</h5>
                    <span className="text-sm text-content/50">Visual Designer</span>
                    <div className="flex space-x-3 mt-4">
                        <Button color="light-green">Connect</Button>
                        <Button>Message</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
