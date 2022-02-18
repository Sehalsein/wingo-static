import React from "react";
import NextImage from "next/image";
import logo from "@/public/logo.png";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <header className="bg-primary flex h-14 items-center text-white md:h-20">
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
      <main className="mx-auto max-w-7xl py-8 px-4 md:py-16">{children}</main>
    </>
  );
};

export default AppLayout;
