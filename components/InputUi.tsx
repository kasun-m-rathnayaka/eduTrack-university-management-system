"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import toast from "react-hot-toast";

const InputUi = ({ setOpen }: { setOpen: any }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleUserInsert = async() => {
    try {
      const response = await axios.post("/api/students", user);
      toast.success("User Successfully Created ! ");
      setOpen(false);
    } catch (error: any) {
      console.log({ "sign up failed": error });
      toast.error("User Creation Failed ! ");
    }
  };

  return (
    <div className=" absolute top-0 left-0 w-full h-screen bg-[#ffffff92] z-50">
      <div className="w-[500px] m-auto p-20 mt-[5%] bg-white border border-purple-600 rounded-3xl">
        <p
          className=" float-right -mt-10 text-red-500 cursor-pointer"
          onClick={() => setOpen(false)}
        >
          x
        </p>
        <form action={""}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Jhone Doe"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={handleUserInsert}
            >
              Submit
            </Button>
            {/* <Button variant="outline" className="w-full">
      Login with Google
    </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputUi;
