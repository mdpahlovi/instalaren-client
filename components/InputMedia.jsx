import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";
import ImageField from "./ImageField";

const InputMedia = () => {
    return (
        <form className="max-w-4xl mx-auto space-y-4">
            <div className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-8">
                <ImageField size="w-40 h-40" />
                <div className="space-y-4">
                    <Input label="Post Title" />
                    <Textarea label="Post Details" className="w-max" />
                </div>
            </div>
            <div className="flex justify-center">
                <Button className="w-64">Post Your Feed</Button>
            </div>
        </form>
    );
};

export default InputMedia;
