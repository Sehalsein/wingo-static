import { ReactElement } from "react";

import LandingLayout from "@/src/components/layout/LandingLayout";
import { NextPageWithLayout } from "@/src/types/app/next";

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-primary text-center">
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4">
        <h1 className="text-4xl text-white">Boost your creator business</h1>
        <h2 className="text-white mt-2">
          Generate more income from your content
        </h2>
        <button className=" bg-white uppercase text-black px-4 py-2 rounded-md mt-6">
          GET EARLY ACCESS
        </button>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default Home;
