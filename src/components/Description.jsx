function Description() {
  return (
    <>
      <section className="mb-[50px]">
        <h1 className=" uppercase text-[35px] md:text-[40px] pb-20 mx-auto w-3/4 lg:w-[40%] lg:text-[55px] pt-20  text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-extrabold">
          The Trusted Platform Powering
          <span className="text-red-600 font-extrabold"> Audio Worldwide</span>
        </h1>
        <div className="grid md:grid-cols-3  py-[50px] md:mx-[100px] xl:mx-[170px] mx-[30px] gap-[40px]">
          <div className=" pl-[30px]   h-[240px] bg-red-600 rounded-lg ">
            <h4 className=" text-[55px] uppercase font-extrabold">1.7b+</h4>
            <p className="text-[30px] text-white font-medium">
              Listeners engaged
            </p>
          </div>
          <div className=" pl-[30px]   h-[240px] bg-red-600 rounded-lg ">
            <h4 className="md: text-[55px] uppercase font-extrabold">190</h4>
            <p className="text-[30px] text-white font-medium">
              Countries reached
            </p>
          </div>
          <div className="pl-[30px]   h-[240px] bg-red-600 rounded-lg ">
            <h4 className=" text-[55px] uppercase font-extrabold">22M+</h4>
            <p className="text-[30px] text-white font-medium">Live events</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Description;
