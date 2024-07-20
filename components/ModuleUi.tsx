"use client";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const ModuleUi = ({
  setOpen,
  handleUserInsert,
}: {
  setOpen: any;
  handleUserInsert: any;
}) => {
  const [user, setUser] = useState({
    code: "",
    name: "",
    status: "",
    department: "",
  });

  const handleClick = () => {
    handleUserInsert(user);
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
              <Label htmlFor="email">Code</Label>
              <Input
                id="code"
                type="text"
                placeholder="C001"
                onChange={(e) => setUser({ ...user, code: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Computer Science"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Status</Label>
              <Input
                id="name"
                type="text"
                placeholder="active"
                onChange={(e) => setUser({ ...user, status: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Department</Label>
              <Input
                id="name"
                type="text"
                placeholder="Information Technology"
                onChange={(e) =>
                  setUser({ ...user, department: e.target.value })
                }
                required
              />
            </div>

            <Button type="button" className="w-full" onClick={handleClick}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModuleUi;
