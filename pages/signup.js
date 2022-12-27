import { Button, Card, CardHeader, Input, Checkbox, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { setAuthUser } from "../requests/user";
import Main from "../components/Layouts/Main";
import { useAuth } from "../hooks/useAuthContext";

const Signup = () => {
    const { createUser, updateUserProfile, loading, setLoading } = useAuth();

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.fast_name.value} ${form.last_name.value}`;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

        if (password !== confirmPassword) {
            toast.error("Password don't metch");
            return;
        }

        createUser(email, password)
            .then(({ user }) => {
                updateUserProfile(name)
                    .then(() => {
                        setAuthUser(user, name);
                        toast.success("Account Created");
                        setLoading(false);
                    })
                    .catch(({ message }) => {
                        toast.error(message);
                        setLoading(false);
                    });
            })
            .catch(({ message }) => {
                toast.error(message);
                setLoading(false);
            });
    };

    return (
        <Main title="SignUp to Instalaren" className="max-w-lg">
            <div className="pt-4"></div>
            <Card className="bg-background">
                <CardHeader className="grid h-28 place-items-center">
                    <Typography className="uppercase text-center px-4" variant="h3" color="white">
                        Create New Account
                    </Typography>
                </CardHeader>
                <form onSubmit={handelSubmit} className="flex flex-col gap-4 p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input type="text" name="fast_name" label="Fast Name" />
                        <Input type="text" name="last_name" label="Last Name" />
                    </div>
                    <Input type="email" name="email" label="Email" />
                    <Input type="password" name="password" label="Password" />
                    <Input type="password" name="confirm_password" label="Confirm Password" />
                    <Checkbox label="Terms & Conditions" />
                    <Button type="submit" fullWidth>
                        {loading ? "Loading..." : "SignUp"}
                    </Button>
                    <Typography className="flex justify-center">
                        If already have an account?
                        <Link href="/signin" className="ml-1 font-bold underline">
                            Signin
                        </Link>
                    </Typography>
                </form>
            </Card>
        </Main>
    );
};

export default Signup;
