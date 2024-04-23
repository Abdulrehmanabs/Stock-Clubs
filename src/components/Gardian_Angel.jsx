import stockClubs from "../assets/Guardian-Angel/Milestone_3.svg";
import Googlers from "../assets/Guardian-Angel/Milestone_2.svg";
import Amazonians from "../assets/Guardian-Angel/Milestone_1.svg";
import Vector_Background from "../assets/backgrounds/Guardian-Angel-Background-Icons.svg";
import Vector_Background_sm from "../assets/backgrounds/Guardian-Angel-small-Background-Icons.svg";
import { useState } from "react";

const Gardian_Angel = () => {
  let [background, setbg] = useState(Vector_Background);

  setInterval(() => {
    let screenSize = innerWidth;
    if (screenSize <= 1023) {
      setbg(Vector_Background_sm);
    } else {
      setbg(Vector_Background);
    }
  }, 0);

  return (
    <section className="bg-[#FBBC12] px-6 sm:py-20 py-10 relative overflow-hidden">
      <div>
        <img
          className="absolute z-10 top-0 left-0 right-0 w-[100%] h-[100%] max-w-screen-2xl mx-auto"
          src={background}
          alt="vector-background"
        />
      </div>
      <div className=" bg-white sticky z-20 rounded-2xl px-10 sm:px-20 py-8 flex justify-center items-center flex-wrap max-w-screen-2xl mx-auto">
        <div className="relative w-full lg:w-3/5  order-1 lg:order-2 text-center">
          <h2 className="absolute bg-slate-50 top-0 z-0 left-0 right-0 max-w-[450px] w-[90%] h-full lg:h-[120%] lg:-mt-14 rounded-3xl py-6 mx-auto text-center md:text-3xl font-semibold">
            Introducing Gardian Angel 😇
          </h2>
          <img
            className="mx-auto hover:scale-110  sticky sm:mb-4 mb-2 mt-20 lg:mt-6 z-40 duration-700"
            src={Amazonians}
            alt="StockClubs_Comunity"
          />
          <img
            className="mx-auto sticky sm:my-4 my-2 z-40"
            src={Googlers}
            alt="StockClubs_Comunity"
          />
          <img
            className="mx-auto sticky sm:my-4 my-2 z-40"
            src={stockClubs}
            alt="StockClubs_Comunity"
          />
          <input
            type="text"
            placeholder="Notify me.."
            className="mx-auto py-2 px-4 my-2 rounded-lg focus:outline-none max-w-[430px] w-[80%] sticky z-40"
          />
          <br />
          <button className="bg-blue-300 text-white my-4 px-10 py-1 rounded-full sticky z-40">
            Add Notification
          </button>
        </div>
        <h3 className="w-full pt-4 lg:pt-0 lg:pr-12 lg:w-2/5 font-semibold sm:text-2xl text-lg text-[#127398] order-2 lg:order-1 text-center lg:text-left">
          <span className="font-bold sm:text-3xl text-xl">
            Automate monitoring{" "}
          </span>
          of your trading accounts 24/7. Control your risks and manage your
          portfolio like a PRO.
        </h3>
      </div>
    </section>
  );
};

export default Gardian_Angel;
