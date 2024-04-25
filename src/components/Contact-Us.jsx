import { useForm } from "react-hook-form";
import Contact_Us_bg from "../assets/backgrounds/Contact-Us-Background-Icons.svg";
import Contact_Us_bg_sm from "../assets/backgrounds/Contact-Us-Small-Background-Icons.svg";
import contact_us_large from "../assets/Contact-Us/contact-us-large.svg";
import contact_us_small from "../assets/Contact-Us/contact-us-small.svg";

const Contact_Us = () => {
  const { register, handleSubmit } = useForm();
  const formData = (data) => {
    console.log(data);
  };
  
  return (
    <section>
      <div className="bg-[#127398] px-6 sm:py-20 py-10 relative overflow-hidden">
        <img
          className="md:block hidden absolute z-10 top-0 left-0 right-0 w-full h-full max-w-screen-2xl mx-auto"
          src={Contact_Us_bg}
          alt="Security-background"
        />
        <img
          className="block md:hidden absolute z-10 top-0 left-0 right-0 w-full h-full max-w-screen-2xl mx-auto"
          src={Contact_Us_bg_sm}
          alt="Security-background"
        />
        <h3 className="mx-auto max-w-screen-lg mb-5 text-center text-white sticky z-20 sm:text-4xl text-2xl font-semibold">
          CONTACT US
        </h3>
        <p className="mx-auto max-w-[550px] mb-9 font-light text-center text-white sticky z-20 sm:text-2xl text-xl ">
          We are here to answer any question you might have. We look forward to
          hearing from you!
        </p>
        <div className="max-w-screen-xl mx-auto sticky z-20 flex justify-center items-center flex-wrap">
          <div className="md:w-5/12 w-full text-center">
            <img
              className="mx-auto md:block hidden"
              src={contact_us_large}
              alt="Contact Us"
            />
            <img
              className="mx-auto block md:hidden"
              src={contact_us_small}
              alt="Contact Us"
            />
          </div>
          <form
            action=""
            onSubmit={handleSubmit(formData)}
            className="md:w-6/12 w-full ms-auto lg:p-20 md:p-10 p-4 md:bg-[#00ABE1] rounded-3xl"
          >
            <div className="md:flex md:gap-8">
              <input
                {...register("first_name", { required: true })}
                className="md:w-6/12 w-full font-semibold text-[#127398] placeholder:text-[#BFEAF7] text-xl sm:py-4 py-3 px-2 my-4 rounded-md focus:outline-none"
                placeholder="First Name"
                type="text"
              />
              <input
                {...register("last_name", { required: true })}
                className="md:w-6/12 w-full font-semibold text-[#127398] placeholder:text-[#BFEAF7] text-xl sm:py-4 py-3 px-2 my-4 rounded-md focus:outline-none"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <input
                {...register("email", { required: true })}
              className="w-full font-semibold text-[#127398] placeholder:text-[#BFEAF7] text-xl sm:py-4 py-3 px-2 my-4 rounded-md focus:outline-none"
              placeholder="Email"
              type="email"
            />
            <textarea
                {...register("message", { required: true })}
              rows="6"
              className="w-full font-semibold text-[#127398] placeholder:text-[#BFEAF7] text-xl sm:py-4 py-3 px-2 my-4 rounded-md focus:outline-none"
              placeholder="Write a message"
            ></textarea>
            <button
              href="/"
              className="sm:p-4 p-3 sm:px-10 bg-[#FFC730] mb-6 text-white text-2xl w-full rounded-lg"
            >
              Submit
            </button>
            <h6 className="text-center text-white text-2xl">
              Thanks for submitting!
            </h6>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Us;
