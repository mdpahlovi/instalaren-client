import Main from "../components/Layouts/Main";
import { Header } from "../components/Header";
import InputMedia from "../components/InputMedia";

export default function Home() {
    return (
        <Main title="Instalaren" className="grid grid-cols-1 gap-12 sm:gap-14 lg:gap-16">
            <Header />
            <InputMedia />
        </Main>
    );
}
