"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("User Successfully Logged In ! ");
      localStorage.setItem("user", JSON.stringify(response.data));
      router.push("/dashboard");
    } catch (error: any) {
      console.log({ "sign in failed": error });
    } finally {
      setLoading(true);
    }
  };

  return (
    <>
      <div className="w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="flex flex-col justify-center items-center gap-2 text-center -mt-0 lg:-mt-20">
              <Image src={"/logo.png"} width={300} height={300} alt="logo" />
              <h1 className="text-3xl font-bold">
                {loading ? "Processing ..." : "Login"}
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form action={""}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    {/* <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link> */}
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    required
                  />
                </div>
                <Button type="submit" className="w-full" onClick={handleSubmit}>
                  Login
                </Button>
                {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
              </div>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary-text">
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/img/login.jpeg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
