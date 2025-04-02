import waveImg from "../assets/waveform-bf3be066d89f9b5b4ae3ebeb9e51618fed7323efd8e69af05166008abcecf8e8.svg";
function Hero() {
  return (
    <>
      <section>
        <div className="my-[90px]">
          <div className="relative">
            <img src={waveImg} alt="" className="mx-auto my-4" />
          </div>
          <div className="absolute top-[200px] lg:top-[170px] ">
            <h1 className=" text-black uppercase text-[40px] mx-1 md:mx-10 md:text-[50px] lg:text-[80px] lg:mx-[200px]  xl:text-[90px] font-bold leading-10 lg:leading-[90px]  text-center">
              We power the best audio experiences in
            </h1>
            <marquee
              behavior=""
              direction=""
              className="text-red-600 xl:text-[80px] uppercase text-[40px] md:text-[50px] text-center lg:text-[80px] font-bold">
              Sports, Podcasting, Faith, Music
            </marquee>
            {/* <div className="flex justify-center items-center mt-1 flex-col gap-5 lg:gap-7 md:flex-row">
              <button className="bg-red-600 uppercase  text-white border text-[22px] md:text-[24px] rounded-full font-bold px-10 py-2">
                get started
              </button>
              <button className="uppercase bg-white rounded-full border-red-600 text-[22px] border  px-10 py-2 font-bold md:text-[24px] text-red-600">
                views plans
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
