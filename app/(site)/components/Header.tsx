import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Header = ({ title, colored, desc }: { title: string; colored: string; desc:string }) => {
  return (
    <div>
      <header className={""}>
        <div className={`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`}>
          <h1
            className={`font-sans font-bold text-6xl md:text-5xl lg:text-8xl text-center  text-gray-800 capitalize`}
          >
            {title}
            <span className="text-primary-text">{colored}</span>
          </h1>
          <div className={`w-full mx-auto`}>
            <p
              className={`mt-10 text-gray-500 text-center text-base lg:text-xl`}
            >
              {desc}
            </p>
          </div>
          <div
            className={`mt-10 flex justify-center items-center w-full mx-auto`}
          >
            <Link href={'/signup'}><Button variant="outline">Get Started</Button></Link>
            
            <span className={`mx-2`}>or</span>
            <Button>Contact us</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
