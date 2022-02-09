import { ReactElement } from "react";

import LandingLayout from "@/src/components/layout/LandingLayout";
import { NextPageWithLayout } from "@/src/types/app/next";

const Home: NextPageWithLayout = () => {
  console.log(
    Buffer.from(
      JSON.stringify({
        apiKey: "AIzaSyBq8a7XY7Ehzr54VNuhC-gRdTwekGOw87I",
        authDomain: "wingo-dev-a83b4.firebaseapp.com",
        projectId: "wingo-dev-a83b4",
        storageBucket: "wingo-dev-a83b4.appspot.com",
        messagingSenderId: "589584574766",
        appId: "1:589584574766:web:1abc8df83ec328b27832bf",
        measurementId: "G-1HN7Q6W352",
      })
    ).toString("base64")
  );
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
