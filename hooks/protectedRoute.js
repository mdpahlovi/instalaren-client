import { useRouter } from "next/router";
import { useAuth } from "./useAuthContext";

export function withProtected(Component) {
    return function WithProtected(props) {
        const { authUser } = useAuth();
        const router = useRouter();
        const pathname = router.pathname;

        if (!authUser?.uid) {
            router.replace("/signin");
            return <h1>Loading...</h1>;
        }
        return <Component pathname={pathname} />;
    };
}
