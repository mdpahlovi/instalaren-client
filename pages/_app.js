import { ThemeProvider, useTheme } from "@material-tailwind/react";
import { ThemeValueProvider } from "../hooks/useTheme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const theme = {
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
    };

    const myTheme = useTheme();
    console.log(myTheme);

    return (
        <ThemeValueProvider>
            <ThemeProvider value={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ThemeValueProvider>
    );
}
