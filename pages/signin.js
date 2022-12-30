import { Button, Card, CardBody, CardHeader, Checkbox, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { toast } from "react-toastify";
import Main from "../components/Layouts/Main";
import { setAuthUser } from "../requests/user";
import { useAuth } from "../hooks/useAuthContext";

const Signin = () => {
    const { signIn, signInByGoogle, signInByFacebook, signInByGithub, loading, setLoading } = useAuth();

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(({ user }) => {
                setAuthUser(user);
                toast.success("Signin Completed");
            })
            .catch(({ message }) => {
                if (message === "Firebase: Error (auth/wrong-password).") {
                    toast.error("OPPS ! Your password didn't match");
                } else if (message === "Firebase: Error (auth/user-not-found).") {
                    toast.error("OPPS ! User doesn't found");
                }
                toast.error(message);
                setLoading(false);
            });
    };

    const handelGoogleSignIn = () => {
        signInByGoogle()
            .then(({ user }) => {
                setAuthUser(user);
                toast.success("Google Signin Done");
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };
    const handelFacebookSignIn = () => {
        signInByFacebook()
            .then(({ user }) => {
                setAuthUser(user);
                toast.success("Facebook Signin Done");
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };
    const handelGithubSignIn = () => {
        signInByGithub()
            .then(({ user }) => {
                setAuthUser(user);
                toast.success("Github Signin Done");
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };

    return (
        <Main title="SignIn to Instalaren" className="max-w-lg">
            <div className="pt-4"></div>
            <Card className="bg-background">
                <CardHeader className="grid h-28 place-items-center">
                    <Typography className="uppercase text-center px-6" variant="h3" color="white">
                        Sign to Account
                    </Typography>
                </CardHeader>
                <CardBody>
                    <div className="line-x mb-4">
                        <p className="mx-2">SignIn with</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <Button onClick={handelGoogleSignIn} variant="outlined">
                            {loading ? "Loading..." : "Google"}
                        </Button>
                        <Button onClick={handelFacebookSignIn} variant="outlined">
                            {loading ? "Loading..." : "Facebook"}
                        </Button>
                        <Button onClick={handelGithubSignIn} variant="outlined">
                            {loading ? "Loading..." : "Github"}
                        </Button>
                    </div>
                    <div className="line-x my-4">
                        <p className="mx-2">Or</p>
                    </div>
                    <form onSubmit={handelSubmit} className="flex flex-col gap-4">
                        <Input type="email" name="email" label="Email" />
                        <Input type="password" name="password" label="Password" />
                        <div className="flex justify-between items-center">
                            <Checkbox label="Remember Me" />
                            <Button variant="text" className="font-bold underline">
                                Forget Password
                            </Button>
                        </div>
                        <Button type="submit" fullWidth>
                            {loading ? "Loading..." : "Signin"}
                        </Button>
                        <Typography className="flex justify-center">
                            Donot have an account?
                            <Link href="/signup" className="ml-1 font-bold underline">
                                Signup
                            </Link>
                        </Typography>
                    </form>
                </CardBody>
            </Card>
        </Main>
    );
};

export default Signin;
