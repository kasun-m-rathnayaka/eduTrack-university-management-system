"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    stuid: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = () => {
    try {
      setLoading(true)
      const response = axios.post('/api/users',user)
      router.push('/login')
      
    } catch (error: any) {
      console.log({"sign up failed":error})
    }finally{
      setLoading(true)
    }
  };
  console.log(user)

  useEffect(() => {
    if (
      user.password.length > 0 ||
      user.name.length > 0 ||
      user.email.length > 0 ||
      user.stuid.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, []);
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="hidden bg-muted lg:block">
          <Image
            src="/img/signup.png"
            alt="Image"
            width="1920"
            height="1080"
            className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">{loading ? "Processing ..." : "Sign Up"}</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to create your new student account
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jhone Doe"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Password</Label>
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
              <div className="grid gap-2">
                <Label htmlFor="email">Student ID</Label>
                <Input
                  id="stuId"
                  type="stuId"
                  placeholder="SD000001"
                  onChange={(e) => setUser({ ...user, stuid: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className={`w-full ${buttonDisabled? 'bg-gray-500 hover:bg-gray-500' : 'bg-primary-text'}`}  onClick={handleSubmit}>
                Sign Up
              </Button>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button> */}
            </div>
            <div className="mt-4 text-center text-sm">
              Do you have an account?{" "}
              <Link href="/login" className="text-primary-text">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
