import { Button, Card, CardHeader, Input, Checkbox, Typography, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import Main from "../components/Layouts/Main";

const Signup = () => {
    return (
        <Main title="SignUp to Instalaren" className="max-w-lg">
            <div className="pt-4"></div>
            <Card className="form-container section-gap card-top-m">
                <CardHeader className="mb-4 grid h-28 place-items-center">
                    <Typography className="uppercase text-center px-4" variant="h3" color="white">
                        Create New Account
                    </Typography>
                </CardHeader>
                <form className="flex flex-col gap-4 p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input type="text" name="fast_name" label="Fast Name" />
                        <Input type="text" name="last_name" label="Last Name" />
                    </div>
                    <Input type="email" name="email" label="Email" />
                    <Input type="password" name="pass" label="Password" />
                    <Input type="password" name="confirmPass" label="Confirm Password" />
                    <Checkbox label="Terms & Conditions" />
                    <Button type="submit" fullWidth>
                        Registration
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
