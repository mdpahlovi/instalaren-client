import Main from "../components/Layouts/Main";
import { Button, useTheme } from "@material-tailwind/react";
import { Header } from "../components/Header";

export default function Home() {
    const myTheme = useTheme();
    console.log(myTheme);
    return (
        <Main title="Instalaren" className="my-0">
            <Header />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button>Button</Button>
        </Main>
    );
}
