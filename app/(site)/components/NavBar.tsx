import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="flex sticky justify-between my-4 items-center mx-5 md:mx-20">
          <div>
            <a href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="md:w-100"
              />
            </a>
          </div>
          <div>
            <ul className="flex gap-5 ">
              <li className="hover:font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:font-bold">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-5 items-center text-sm">
              <li>
                <Link href={"/login"}>
                  <Button>Login</Button>
                </Link>
              </li>
              <li className=" hidden md:block">
                <Link href={"/signup"}>
                  <Button variant={"outline"} className="">
                    Sign Up
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
