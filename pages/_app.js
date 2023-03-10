import { ThemeProvider, useTheme } from "@material-tailwind/react";
import { ThemeValueProvider } from "../hooks/useTheme";
import "../styles/globals.css";
import { UserContext } from "../hooks/useAuthContext";
import Toastify from "../components/Toastify";

export default function App({ Component, pageProps }) {
    const mt_theme = {
        button: {
            defaultProps: {
                color: "purple",
            },
        },
        iconButton: {
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
            styles: {
                base: {
                    container: { minWidth: "min-w-[320px]" },
                    input: { color: "text-content/70" },
                    label: { color: "peer-placeholder-shown:text-content/50" },
                },
                variants: {
                    outlined: {
                        base: {
                            input: { borderColor: "placeholder-shown:border-edge placeholder-shown:border-t-edge", borderWidth: "placeholder-shown:border-2" },
                        },
                    },
                },
            },
        },
        textarea: {
            defaultProps: { color: "purple", size: "lg" },
            styles: {
                base: { textarea: { color: "text-content/70" }, label: { color: "peer-placeholder-shown:text-content/50" } },
                variants: {
                    outlined: {
                        base: {
                            textarea: {
                                borderColor: "placeholder-shown:border-edge placeholder-shown:border-t-edge",
                                borderWidth: "placeholder-shown:border-2",
                            },
                        },
                    },
                },
            },
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
                    <Toastify />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeValueProvider>
        </UserContext>
    );
}
