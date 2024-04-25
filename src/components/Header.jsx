import vector_background from "../assets/Background.svg";
import Apple_Store from "../assets/Apple-Store-Button.svg";
import Google_Play from "../assets/GooglePlay-Button.svg";
import { useForm } from "react-hook-form";
const Header = () => {
  
  const { register, handleSubmit } = useForm();

  const formData = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div className="px-6 sm:py-20 py-10 overflow-hidden flex flex-wrap items-center max-w-screen-2xl mx-auto">
        <div className=" sm:px-20 text-center lg:text-left lg:w-6/12">
          <h1 className="font-bold text-[#00ABE1] sm:text-6xl text-4xl lg:pr-20">
            FAANG INVESTING COMMUNITY
          </h1>
          <p className="text-[#127398] lg:max-w-[400px] lg:pr-4 font-semibold text-xl sm:text-2xl lg:mt-4 mt-8">
            We help people working in BigTech make better financial decisions
            with the data and insights provided by AI
          </p>
          <div className="text-center my-9 lg:hidden flex flex-col justify-center">
            <a href="/Apple_Store" className="mx-auto mb-5">
              <img src={Apple_Store} alt="Apple Store Button" />
            </a>
            <a href="/Google_Play" className="mx-auto">
              <img src={Google_Play} alt="Google Play Button" />
            </a>
          </div>
          <h3 className="w-full lg:hidden font-semibold sm:text-3xl text-xl text-[#127398] text-center">
            <span className="font-bold sm:text-4xl text-2xl">
              Sign up today{" "}
            </span>
            and manage your portfolio like a pro with personalized assistant and
            access to a trusted tech community of 1,200 members who connected
            $150M+ of total assets.
          </h3>
        </div>
        <div className="lg:w-5/12 xl:w-5/12 lg:block hidden">
          <div className="bg-[#00ABE1] relative p-6 rounded-3xl">
            <img
              className="absolute z-0 top-0 left-0 right-0 w-full h-full"
              src={vector_background}
              alt="background"
            />
            <form
              onSubmit={handleSubmit(formData)}
              action="/"
              className="p-10 sticky z-40 bg-white rounded-3xl"
            >
              <h3 className="mb-4 xl:text-5xl text-4xl font-semibold text-center text-[#00ABE1]">
                Welcome Back
              </h3>
              <input
                {...register("email", { required: true })}
                className="w-full my-6 p-4 text-xl font-bold border border-[#00ABE1] placeholder:text-[#BFEAF7] text-[#127398] bg-[#F5FAFF] rounded-xl focus:outline-none "
                placeholder="Username"
                type="email"
              />

              <input
                {...register("password", { required: true })}
                className="w-full my-4 mb-2 p-4 text-xl font-bold border border-[#00ABE1] placeholder:text-[#BFEAF7] text-[#127398] bg-[#F5FAFF] rounded-xl focus:outline-none "
                placeholder="Password"
                type="password"
              />
              <h4 className="text-right font-bold text-[#00ABE1] text-lg">
                <a href="/">Forget Password?</a>
              </h4>
              <button
                className="w-full my-4 p-4 text-3xl text-white font-semibold bg-[#00ABE1] rounded-xl cursor-pointer "
                type="submit"
              >
                Log In
              </button>
              <h5 className="font-medium text-nowrap xl:text-xl text-lg text-[#127398] flex items-center max-w-[400px] mx-auto mt-6">
                Don{"'"}t have an account?
                <a
                  href="/"
                  className="ms-auto text-[#00ABE1] xl:text-2xl text-xl font-bold text-nowrap"
                >
                  Create One
                </a>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
