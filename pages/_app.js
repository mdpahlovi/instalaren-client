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
    };

    const myTheme = useTheme();

    return (
        <ThemeValueProvider>
            <ThemeProvider value={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ThemeValueProvider>
    );
}
