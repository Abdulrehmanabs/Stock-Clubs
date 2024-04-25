import _1by1 from "../assets/Investor-Report/IR-1-1.svg";
import _2by1 from "../assets/Investor-Report/IR-2-1.svg";
import _3by1 from "../assets/Investor-Report/IR-3-1.svg";
import Investor_Reports from "../assets/backgrounds/Investor-report-Background-Icons.svg";
import Investor_Reports_sm from "../assets/backgrounds/Investor-report-small-Background-Icons.svg";
import { useState } from "react";

const Investor_Report = () => {
  let [background, setbg] = useState(Investor_Reports);

  setInterval(() => {
    let screenSize = innerWidth;
    if (screenSize <= 1023) {
      setbg(Investor_Reports_sm);
    } else {
      setbg(Investor_Reports);
    }
  }, 0);

  return (
    <section
      style={{ backgroundColor: "#9F73C2" }}
      className="px-6 sm:py-20 py-10 relative overflow-hidden"
    >
      <div>
        <img
          className="absolute z-10 top-0 left-0 right-0 w-full h-full max-w-screen-2xl mx-auto"
          src={background}
          alt="vector-background"
        />
      </div>
      <div className=" bg-white sticky z-20 rounded-2xl px-10 sm:px-20 py-8 flex justify-center items-center flex-wrap max-w-screen-2xl mx-auto">
        <div className="relative w-full lg:w-3/5  flex justify-center p-6">
          <h2 className="absolute bg-slate-50 top-0 left-0 right-0 max-w-[400px] h-full lg:h-[120%] lg:-mt-14 rounded-3xl py-6 mx-auto text-center text-3xl font-semibold">
            Investor Reports
          </h2>
          <img
            className=" mt-20 lg:mt-0 z-10 "
            src={_3by1}
            alt="Portfolio_structure"
          />
          <img
            className="ml-[-300px] sm:ml-[-400px] mt-20 lg:mt-0 hover:translate-x-10 hover:-translate-y-6 z-10 duration-700"
            src={_2by1}
            alt="Portfolio_structure"
          />
          <img
            className="ml-[-340px] sm:ml-[-450px] mt-10 lg:mt-0 z-10"
            src={_1by1}
            alt="Portfolio_structure"
          />
        </div>
        <h3 className="w-full pt-4 lg:pt-0 lg:pl-6 lg:w-2/5 font-semibold sm:text-2xl text-lg text-[#127398] text-center lg:text-left">
          <span className="font-bold sm:text-3xl text-xl">
            Receive personalized investor reports{" "}
          </span>
          and understand how your trading activities contribute to your overall
          wealth.
        </h3>
      </div>
    </section>
  );
};

export default Investor_Report;
