import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Main = ({ title, children, className }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main className={`min-h-screen container mx-auto px-6 ${className}`}>{children}</main>
            <Footer />
        </>
    );
};

export default Main;
