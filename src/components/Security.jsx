import Security_Backgroung from "../assets/backgrounds/Security-Backgroung-Icons.svg";
import Security_Backgroung_sm from "../assets/backgrounds/Security-Small-Backgroung-Icons.svg";
import powered_by_aws from "../assets/Security-Icons/powered_by_aws.svg";
import PLAID from "../assets/Security-Icons/PLAID.svg";
import AES_256 from "../assets/Security-Icons/AES_256.svg";
import { useState } from "react";
const Security = () => {
  let [background, setbg] = useState(Security_Backgroung);

  setInterval(() => {
    let screenSize = innerWidth;
    if (screenSize <= 1023) {
      setbg(Security_Backgroung_sm);
    } else {
      setbg(Security_Backgroung);
    }
  }, 500);
  return (
    <section>
      <div className="bg-[#009BCC] px-6 sm:py-20 py-10 relative overflow-hidden">
        <img
          className="absolute z-10 top-0 left-0 right-0 w-full h-full max-w-screen-2xl mx-auto"
          src={background}
          alt="Security-background"
        />
        <h3 className="mx-auto max-w-screen-lg text-center text-white sticky z-20 sm:text-4xl text-2xl font-semibold">
          SECURITY IS OUR PRIORITY
        </h3>
        <div className="text-center bg-white lg:bg-transparent sticky z-20 rounded-2xl max-w-screen-2xl mx-auto">
          <div className="my-10 grid lg:gap-6 lg:grid-cols-3 grid-cols-1 text-center">
            <div className="bg-white px-6 py-10 text-center rounded-3xl text-[#127398] sm:text-3xl text-xl">
              <img src={powered_by_aws} className="mx-auto" alt="icon" />
              <h3 className="font-bold mb-6 mt-8 ">Cloud Infrastructure</h3>
              <p className="sm:text-2xl texl-lg">
                Our application is built on the same reliable, scalable
                infrastructure used to power AMAZON.com’s global web properties.
                We ensure that the data can only be accessed by authorized roles
                and services with audited access.
              </p>
              <h2></h2>
            </div>
            <hr className="lg:hidden block h-[2px] bg-[#127398] mx-10" />
            <div className="bg-white px-6 py-10 text-center rounded-3xl text-[#127398] sm:text-3xl text-xl">
              <img src={PLAID} className="mx-auto" alt="icon" />
              <h3 className="font-bold mb-6 mt-8 ">Secure Broker Connection</h3>
              <p className="sm:text-2xl texl-lg">
                Brokerage Account Linking is done though our partner Plaid which
                handles credential validation (including multi-factor
                authentication) for each institution it supports and provides
                your account transaction history and holdings structure to
                StockClubs using secure access tokens.
              </p>
            </div>
            <hr className="lg:hidden block h-[2px] bg-[#127398] mx-10" />
            <div className="bg-white px-6 py-10 text-center rounded-3xl text-[#127398] sm:text-3xl text-xl">
              <img src={AES_256} className="mx-auto" alt="icon" />
              <h3 className="font-bold mb-6 mt-8 ">Data Encryption</h3>
              <p className="sm:text-2xl texl-lg">
                The combination of the Advanced Encryption Standard (AES-256)
                and Transport Layer Security (TLS) keeps your personal
                infomation safe. We encrypt data in transit between our services
                and at rest.
              </p>
            </div>
          </div>
          <button
            href="/"
            className="sm:p-4 p-3 sm:px-10 bg-[#FFC730] mb-6 lg:mb-0 text-white text-2xl max-w-[400px] rounded-lg"
          >
            Learn More About Security
          </button>
        </div>
      </div>
    </section>
  );
};

export default Security;
