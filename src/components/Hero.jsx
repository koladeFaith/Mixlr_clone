import waveImg from "../assets/waveform-bf3be066d89f9b5b4ae3ebeb9e51618fed7323efd8e69af05166008abcecf8e8.svg";
function Hero() {
  return (
    <>
      <section>
        <div className="pt-[90px] h-[400px] md:h-[440px] lg:h-[600px]">
          <div className="relative ">
            <img src={waveImg} alt="" className="mx-auto w-[100%] mt-5" />
          </div>
          <div className="absolute top-[200px] lg:top-[170px] ">
            <h1 className=" text-black uppercase text-[40px] mx-3 md:mx-10 md:text-[50px] lg:text-[80px] xl:mx-[200px]  xl:text-[90px] font-extrabold leading-[45px] lg:leading-[90px]  text-center">
              We power the best audio experiences in
            </h1>
            <marquee
              behavior=""
              direction=""
              className="text-red-600 xl:text-[80px] uppercase text-[40px] md:text-[50px] text-center lg:text-[80px] font-extrabold">
              Sports, Podcasting, Faith, Music
            </marquee>
            <div className="flex justify-center items-center mt-1 flex-col gap-4 md:gap-3 lg:gap-4 md:flex-row">
              <button className="bg-red-600 uppercase hover:bg-red-500   text-white border text-[22px] md:text-[30px] rounded-full font-extrabold px-10 py-2">
                get started
              </button>
              <button className="uppercase bg-white rounded-full hover:text-black border-red-600 text-[22px] border  px-10 py-2 font-extrabold md:text-[30px] text-red-600">
                views plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
