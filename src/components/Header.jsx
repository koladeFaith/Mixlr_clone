import logo from "../assets/download.svg";
function Header() {
  return (
    <>
      <header className="md:mx-4">
        <div className="md:flex  md:gap- md:justify-between">
          <img
            src={logo}
            alt=""
            className="w-[100px] md:w-[110px] mx-auto md:mx-0 my-6"
          />
          <div className="flex gap-3 md:gap-7 items-center justify-center md:text-[17px]">
            <div className="flex gap-5 items-center md:gap-7 justify-center">
              <button>Features</button>
              <button>Listen</button>
              <button>Pricing</button>
              <button>Login</button>
            </div>
            <button className="text-red-600 border rounded-full px-1 md:px-5  md:py-2 py-1 flex gap-3 font-semibold ">
              <span className=" md:px-2 px-1 font-bold text-[20px] rounded-full border border-red-700">
                +
              </span>
              <span className="hidden md:block">Get Started</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
