import Main from "../components/Layouts/Main";
import { Header } from "../components/Header";
import InputMedia from "../components/InputMedia";

export default function Home() {
    return (
        <Main title="Instalaren" className="my-0">
            <Header />
            <InputMedia />
        </Main>
    );
}
