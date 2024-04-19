import Sign_Up_Comunity from "../assets/Sign-Up/Sign_Up_Community.svg";
import QR_Code from "../assets/Sign-Up/Sign_Up_Community_QR_Code.svg";
import Sign_Up_Bg from "../assets/backgrounds/Sign_Up_Background_Icons.svg";
import Faces from "../assets/Faces.svg";

const Sign_Up = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto -mb-8 sm:-mb-14 lg:-mb-20 sticky z-20">
        <img className="w-full" src={Faces} alt="Community Faces" />
      </div>
      <div
        className=" px-6 sm:pb-20 pb-10 sm:pt-32 pt-14 relative overflow-hidden"
        style={{ background: "#00ABE1" }}
      >
        <img
          className="absolute z-10 top-0 left-0 right-0 w-[100%] h-[100%] mx-auto"
          src={Sign_Up_Bg}
          alt="vector-background"
        />

        <div className=" max-w-screen-2xl mx-auto flex justify-center items-center flex-wrap">
          <div className="bg-white lg:w-4/12 sticky z-20 p-2 rounded-3xl mb-10 lg:mb-0">
            <img src={QR_Code} alt="QR_Code" width={"100%"} />
          </div>
          <div className="lg:ps-10 lg:w-8/12">
            <div className=" bg-white sticky z-20 h-[100%] rounded-2xl px-10 sm:px-20 py-8 flex justify-center items-center flex-wrap">
              <div className="relative w-full lg:w-5/12 ">
                <img
                  className="mb-0 mx-auto lg:-ms-40 hover:scale-110 duration-700 hover:-translate-x-4"
                  src={Sign_Up_Comunity}
                  alt="Sign_Up_Comunity"
                />
              </div>
              <h3 className="w-full pt-4 lg:pt-0 lg:w-7/12 font-semibold sm:text-2xl text-lg text-[#127398] text-center lg:text-left">
                <span className="font-bold sm:text-3xl text-xl">
                  Sign up today{" "}
                </span>
                and manage your portfolio like a pro with personalized assistant
                and access to a trusted tech community of 1,200 members who
                connected $150M+ of total assets.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;
