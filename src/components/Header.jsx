import logo from "../assets/download.svg";
import Image from "../assets/download (27).svg";
function Header() {
  return (
    <>
      <header className="md:mx-4">
        <div className="md:flex  md:gap- md:justify-between">
          <a href="">
            <img
              src={logo}
              alt=""
              className="w-[100px] md:w-[110px] mx-auto md:mx-0 my-6"
            />
          </a>
          <div className="flex gap-3 md:gap-7 items-center  justify-center md:text-[17px]">
            <div className="flex gap-5 items-center md:gap-7 justify-center">
              <button className="hover:text-red-500">Features</button>
              <button className="hover:text-red-500">Listen</button>
              <button className="hover:text-red-500">Pricing</button>
              <button className="hover:text-red-500">Login</button>
            </div>
            <div className="overlay">
              <button className="text-red-600 border rounded-full px-1 md:px-5  md:py-2 py-1 flex gap-3 font-semibold ">
                {/* <span className=" md:px-2 px-1 font-bold text-[18px] rounded-full border border-red-700">
                  +
                </span> */} <img src={Image} className="w-[20px] text-red-600"  alt="" />
                <span className="hidden md:block">Get Started</span>
              </button>
            </div>
            {/* <div className="hide text-[40px] text-red-800">Hello</div> */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
