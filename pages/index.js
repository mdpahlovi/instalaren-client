import Main from "../components/Layouts/Main";
import { Button } from "@material-tailwind/react";

export default function Home() {
    return (
        <Main title="Instalaren">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <Button>Button</Button>
        </Main>
    );
}
