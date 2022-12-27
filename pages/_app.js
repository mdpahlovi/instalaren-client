import { ThemeProvider, useTheme } from "@material-tailwind/react";
import { ThemeValueProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../hooks/useAuthContext";

export default function App({ Component, pageProps }) {
    const { theme } = useTheme();

    const mt_theme = {
        button: {
            defaultProps: {
                color: "purple",
            },
        },
        switch: {
            defaultProps: {
                color: "purple",
            },
        },
        cardHeader: {
            defaultProps: { color: "purple", shadow: false },
        },
        input: {
            defaultProps: { color: "purple", size: "lg" },
        },
        checkbox: {
            defaultProps: { color: "purple" },
        },
        menu: {
            styles: {
                base: {
                    menu: {
                        bg: "bg-background",
                        border: "border border-edge",
                        boxShadow: "shadow-none",
                        color: "text-content/70",
                        fontSize: "",
                    },
                },
            },
        },
    };

    return (
        <UserContext>
            <ThemeValueProvider>
                <ThemeProvider value={mt_theme}>
                    <ToastContainer position="top-right" autoClose={1500} theme={theme} />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeValueProvider>
        </UserContext>
    );
}
