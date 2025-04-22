import img1 from "../assets/download (24).svg";
import img2 from "../assets/download (10).svg";
import img3 from "../assets/download (11).svg";
function Description() {
  return (
    <>
      <section className="mb-[50px]">
        <h1 className=" uppercase text-[35px] md:text-[40px] pb-20 mx-auto w-3/4 lg:w-[40%] lg:text-[55px] pt-20  text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-extrabold">
          The Trusted Platform Powering
          <span className="text-red-600 font-extrabold"> Audio Worldwide</span>
        </h1>
        <div className="grid md:grid-cols-3  py-[50px] md:mx-[50px] xl:mx-[150px] mx-[30px] gap-[40px]">
          <div className=" pl-[30px] pt-5 pb-6 h-[240px] md:h-[260px] bg-red-600 rounded-lg ">
            <img src={img1} alt="" className="w-[50px] lg:w-[70px] " />
            <h4 className=" lg:text-[55px] text-[50px] uppercase font-extrabold">
              1.7b+
            </h4>
            <p className="lg:text-[32px] leading-[30px] text-[30px] text-white font-medium">
              Listeners engaged
            </p>
          </div>
          <div className=" pl-[30px] pt-5 pb-6 h-[240px] md:h-[260px] bg-red-600 rounded-lg ">
            <img src={img2} alt="" className="w-[50px] lg:w-[70px] " />

            <h4 className="lg:text-[55px] text-[50px] uppercase font-extrabold">
              190
            </h4>
            {/* <p className="lg:text-[32px]  leading-[30px] text-[30px] text-white font-medium">
              Countries reached
            </p> */}
          </div>
          <div className="pl-[30px] pt-5 pb-6 h-[240px] md:h-[260px] bg-red-600 rounded-lg ">
            <img src={img3} alt="" className="w-[50px] lg:w-[70px] " />

            <h4 className=" lg:text-[55px] text-[50px] uppercase font-extrabold">
              22M+
            </h4>
            <p className="lg:text-[32px]  leading-[30px] text-[30px] text-white font-medium">
              Live events
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Description;
