import React from "react";
import Main from "../components/Layouts/Main";
import MediaCard from "../components/MediaCard";

const Media = () => {
    return (
        <Main title="Instalaren - Media" className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((a, i) => (
                <MediaCard key={i} />
            ))}
        </Main>
    );
};

export default Media;
