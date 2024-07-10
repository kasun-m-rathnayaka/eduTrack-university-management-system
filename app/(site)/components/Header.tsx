import { Button } from "@/components/ui/button";
import React from "react";

const Header = ({ title, colored }: { title: string; colored: string }) => {
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
              with seamless, integrated solutions for admissions, enrollment,
              academic management, and more. Experience a new era of efficiency
              and connectivity
            </p>
          </div>
          <div
            className={`mt-10 flex justify-center items-center w-full mx-auto`}
          >
            <Button variant="outline">Get Started</Button>
            <span className={`mx-2`}>or</span>
            <Button>Contact us</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
