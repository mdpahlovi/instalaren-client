import { useRouter } from "next/router";
import { useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { useAuth } from "../hooks/useAuthContext";
import Main from "./Layouts/Main";

export function Protect(Component) {
    return function Protect(props) {
        const { authUser } = useAuth();
        const router = useRouter();

        const isLogin = (authUser, router) => {
            if (!authUser?.uid) {
                router.replace("/signin");
            }
        };

        useEffect(() => {
            isLogin(authUser, router);
        }, [authUser, router]);

        return <Component authUser={authUser} {...props} />;
    };
}
