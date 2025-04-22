import logo2 from "../assets/download (1).svg";
import facebook from "../assets/download (7).svg";
import twitter from "../assets/download (22).svg";
import instagram from "../assets/download (21).svg";

function Footer() {
  return (
    <>
      <footer className="lg:w-3/4 w-full mb-4  mx-auto">
        <h1 className=" uppercase text-[35px] md:text-[40px] pb-14 mx-auto lg:w-[70%] lg:text-[55px]   text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-extrabold ">
          Professional tools for audio{" "}
          <span className="text-red-600 font-extrabold">made simple</span>{" "}
        </h1>
        <div className="flex justify-center items-center mt-1 flex-col gap-4 md:gap-3 lg:gap-4 md:flex-row">
          <button className="bg-red-600 uppercase hover:bg-red-500   text-white border text-[20px] md:text-[26px] rounded-full font-extrabold px-10 py-2">
            get started
          </button>
          <button className="uppercase bg-white rounded-full hover:text-black border-red-600 text-[20px] border  px-10 py-2 font-extrabold md:text-[26px] text-red-600">
            views plans
          </button>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <img src={logo2} alt="" className="w-[60px] mt-20" />
        </div>
        <div className="flex justify-center gap-5 pt-10 items-center">
          <img src={facebook} className="" alt="" />
          <img src={twitter} className="" alt="" />
          <img src={instagram} className="" alt="" />
        </div>
        <div className="md:flex justify-center gap-7 py-10 text-[17px]  text-center">
          <a href="">
            <li>Pricing</li>
          </a>
          <a href="">
            {" "}
            <li>Blog</li>
          </a>

          <a href="">
            <li>Support</li>
          </a>

          <a href="">
            <li>Careers</li>
          </a>

          <a href="">
            <li>Terms of Use</li>
          </a>

          <a href="">
            <li>Privacy Policy</li>
          </a>
        </div>
        <p className="text-center text-[17px]">
          © Mixlr Ltd 2025 - All rights reserved
        </p>
      </footer>
    </>
  );
}
export default Footer;
