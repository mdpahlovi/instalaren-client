import React from "react";
import Main from "../components/Layouts/Main";
import MediaCard from "../components/MediaCard/MediaCard";

const Media = () => {
    return (
        <Main title="Instalaren - Media" className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[...Array(6)].map((a, i) => (
                <MediaCard key={i} />
            ))}
        </Main>
    );
};

export default Media;
