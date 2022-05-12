import logo from "@/public/logo-white.png";
import NextImage from "next/image";
import React from "react";

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      {/* <header className="bg-primary flex h-14 items-center text-white md:h-20">
        <div className="mx-auto flex w-full max-w-7xl justify-between gap-4 px-4">
          <div className="relative h-6 w-1/6 md:h-10">
            <NextImage
              src={logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>
      </header> */}
      <main className="mx-auto w-full max-w-7xl flex-grow py-8 px-4 md:py-16">
        {children}
      </main>
      <footer className="w-full flex-initial py-10 text-center">
        <div className="relative m-auto h-6 w-20">
          <NextImage
            src={logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
