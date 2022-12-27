import { Button, Card, CardBody, CardHeader, Checkbox, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Main from "../components/Layouts/Main";

const Signin = () => {
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
                    <div className="grid grid-cols-3 gap-4">
                        <Button variant="outlined">Google</Button>
                        <Button variant="outlined">Facebook</Button>
                        <Button variant="outlined">Github</Button>
                    </div>
                    <div className="line-x my-4">
                        <p className="mx-2">Or</p>
                    </div>
                    <form className="flex flex-col gap-4">
                        <Input type="email" name="email" label="Email" />
                        <Input type="password" name="password" label="Password" />
                        <div className="flex justify-between items-center">
                            <Checkbox label="Remember Me" />
                            <Button variant="text" className="font-bold underline">
                                Forget Password
                            </Button>
                        </div>
                        <Button type="submit" fullWidth>
                            Signin
                        </Button>
                        <Typography className="flex justify-center">
                            Don't have an account?
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
