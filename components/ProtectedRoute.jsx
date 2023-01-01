import { useRouter } from "next/router";
import { CirclesWithBar } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuthContext";
import Main from "./Layouts/Main";

export function Protect(Component) {
    return function Protect(props) {
        const { authUser } = useAuth();
        const router = useRouter();

        if (!authUser?.uid) {
            router.replace("/signin");
            return (
                <Main>
                    <div className="w-full h-80 flex justify-center items-center">
                        <CirclesWithBar
                            height="200"
                            width="200"
                            color="#A600FF"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            outerCircleColor=""
                            innerCircleColor=""
                            barColor=""
                            ariaLabel="circles-with-bar-loading"
                        />
                    </div>
                </Main>
            );
        }
        return <Component authUser={authUser} {...props} />;
    };
}
