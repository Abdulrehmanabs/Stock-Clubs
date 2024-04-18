import stockClubs from "../assets/StockClubs-Comunity/StockClubs.svg";
import Googlers from "../assets/StockClubs-Comunity/Googlers.svg";
import Amazonians from "../assets/StockClubs-Comunity/Amazonians.svg";
import Vector_Background from "../assets/backgrounds/StockClub-Community-Background-Icons.svg";
import Vector_Background_sm from "../assets/backgrounds/StockClub-Community-small-Background-Icons.svg";
import { useState } from "react";
const StockClubs_Comunity = () => {
  let [background, setbg] = useState(Vector_Background);

  // setInterval(() => {
  //   let screenSize = innerWidth;
  //   if (screenSize <= 1023) {
  //     console.log(screenSize);
  //     setbg(Vector_Background_sm);
  //   } else {
  //     setbg(Vector_Background);
  //   }
  // }, 0);

  return (
    <>
      <div className="bg-[#3994E9] px-6 sm:py-20 py-10 relative overflow-hidden">
        <div>
          <img
            className="absolute z-10 top-0 left-0 right-0 w-[100%] h-[100%] max-w-screen-2xl mx-auto"
            src={background}
            alt="vector-background"
          />
        </div>
        <div className=" bg-white sticky z-20 rounded-2xl px-10 sm:px-20 py-8 flex justify-center items-center flex-wrap max-w-screen-2xl mx-auto">
          <div className="relative w-full lg:w-3/5  order-1 lg:order-2">
            <img
              className="mx-auto mt-0 hover:scale-110 hover:translate-x-4 hover:translate-y-4 hover:z-10 duration-700"
              src={Amazonians}
              alt="StockClubs_Comunity"
            />
            <img
              className="mx-auto md:mt-[-320px] sm:mt-[-300px] mt-[-7rem] hover:scale-110 hover:z-10 duration-700"
              src={Googlers}
              alt="StockClubs_Comunity"
            />
            <img
              className="mx-auto md:mt-[-220px] sm:mt-[-200px] mt-[-7rem] hover:scale-110 hover:translate-x-4 hover:-translate-y-4 hover:z-10 duration-700"
              src={stockClubs}
              alt="StockClubs_Comunity"
            />
          </div>
          <h3 className="w-full lg:pr-6 lg:w-2/5 font-semibold sm:text-2xl text-lg text-[#127398] order-2 lg:order-1 text-center lg:text-left">
            <span className="font-bold sm:text-3xl text-xl">
              Connect your brokerage accounts{" "}
            </span>
            and get access to trading ideas, aggregated stats and discussions in
            your tech investing community right away.
          </h3>
        </div>
      </div>
    </>
  );
};

export default StockClubs_Comunity;
