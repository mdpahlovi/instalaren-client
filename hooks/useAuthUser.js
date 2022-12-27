import React, { createContext, useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Config/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Create User & Update Profile
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // Signin & Signin With Social
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInByGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const signInByFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };
    const signInByGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // Sign Out User & Remove JWT Token
    const signout = () => {
        setLoading(true);
        localStorage.removeItem("ebay-token");
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (correntUser) => {
            setUser(correntUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

    // Get Theme Value
    const [theme, setTheme] = useState(null);
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        updateUserProfile,
        signIn,
        signInByGoogle,
        signInByFacebook,
        signInByGithub,
        signout,
        theme,
        setTheme,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

const useAuthUser = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuthUser;
