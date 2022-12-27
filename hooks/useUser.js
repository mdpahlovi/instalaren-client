import { useEffect, useState } from "react";
import { getUser } from "../requests/user";
import { useAuth } from "./useAuthContext";

const useUser = () => {
    const { authUser } = useAuth();
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(authUser)
            .then((data) => {
                setUserLoading(false);
                setUser(data);
            })
            .catch((error) => console.log(error));
    }, [authUser]);

    return { user, userLoading };
};

export default useUser;
