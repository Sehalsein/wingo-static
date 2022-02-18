import React from "react";
import NextImage from "next/image";
import logo from "@/public/logo-white.png";

const LandingLayout: React.FC = ({ children }) => {
  return (
    <>
      <header className="flex h-14 items-center bg-white text-white md:h-20">
        <div className="mx-auto flex w-full max-w-7xl justify-between gap-4 px-4">
          <div className="relative h-10 w-1/6">
            <NextImage
              src={logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>
      </header>
      <main className="">{children}</main>
    </>
  );
};

export default LandingLayout;
