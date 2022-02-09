import React from "react";
import NextImage from "next/image";
import logo from "@/public/logo.png";

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <header className="flex bg-primary text-white h-14 md:h-20 items-center">
        <div className="max-w-7xl mx-auto flex gap-4 justify-between w-full px-4">
          <div className="h-10 w-1/6 relative">
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
      <main className="max-w-7xl mx-auto py-8 md:py-16 px-4">{children}</main>
    </>
  );
};

export default AppLayout;
