import { Button } from "@/components/ui/button";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className={""}>
        <div className={`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`}>
          <h1
            className={`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`}
          >
            Your website, beyond expectations
          </h1>
          <div className={`max-w-xl mx-auto`}>
            <p
              className={`mt-10 text-gray-500 text-center text-xl lg:text-3xl`}
            >
              Make your website wonderful and build beyond your expectations.
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
