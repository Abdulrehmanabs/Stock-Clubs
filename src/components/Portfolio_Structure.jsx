import Account_Types from "../assets/Portfolio-Structure/Account-Types-Card.svg";
import Accounts from "../assets/Portfolio-Structure/Accounts-card.svg";
import Brokers from "../assets/Portfolio-Structure/Brokers-Card.svg";
import Portfolio_structure from "../assets/backgrounds/Portfolio-structure-Background-Icons.svg";
import Portfolio_structure_sm from "../assets/backgrounds/Portfolio-structure-small-Background-Icons.svg";
import { useState } from "react";
const Portfolio_Structure = () => {
  let [background, setbg] = useState(Portfolio_structure);

  setInterval(() => {
    let screenSize = innerWidth;
    if (screenSize <= 1023) {
      setbg(Portfolio_structure_sm);
    } else {
      setbg(Portfolio_structure);
    }
  }, 0);

  return (
    <>
      <div
        className=" px-6 sm:py-20 py-10 relative overflow-hidden"
        style={{ background: "#31CE5D" }}
      >
        <div>
          <img
            className="absolute z-10 top-0 left-0 right-0 w-[100%] h-[100%] max-w-screen-2xl mx-auto"
            src={background}
            alt="vector-background"
          />
        </div>
        <div className=" bg-white sticky z-20 rounded-2xl px-10 sm:px-20 py-8 flex justify-center items-center flex-wrap max-w-screen-2xl mx-auto">
          <div className="relative w-full lg:w-3/5 ">
            <img
              className="mx-auto mt-0 hover:scale-110 hover:translate-x-4 hover:translate-y-4 hover:z-10 duration-700"
              src={Brokers}
              alt="Portfolio_structure"
            />
            <img
              className="mx-auto md:mt-[-180px] sm:mt-[-170px] mt-[-6rem] hover:scale-110 hover:z-10 duration-700"
              src={Accounts}
              alt="Portfolio_structure"
            />
            <img
              className="mx-auto md:mt-[-250px] sm:mt-[-250px] mt-[-7rem] hover:scale-110 hover:translate-x-4 hover:-translate-y-4 hover:z-10 duration-700"
              src={Account_Types}
              alt="Portfolio_structure"
            />
          </div>
          <h3 className="w-full pt-4 lg:pt-0 lg:pl-6 lg:w-2/5 font-semibold sm:text-2xl text-lg text-[#127398] text-center lg:text-left">
            <span className="font-bold sm:text-3xl text-xl">
              Track your net worth{" "}
            </span>
            automatically and spend less time managing your personal finances.
            No need to update spreadsheets manually anymore.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Portfolio_Structure;
