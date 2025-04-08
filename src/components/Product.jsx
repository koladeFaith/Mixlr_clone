import liveStream from "../assets/live-stream-454-a45b8ca727568f4bfc99a9a34caafaded752949518f28d91028db5d97e202083.webp";
function Product() {
  return (
    <>
      <section className="lg:w-4/5  mx-auto">
        <div>
          <h1 className=" uppercase text-[35px] md:text-[40px] pb-16 mx-auto w-full sm:w-4/5 lg:text-[50px]   text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-bold ">
            the complete flatform for{" "}
            <span className="text-red-600 font-bold">professional audio</span>{" "}
          </h1>
          <div className="mx-[15px] md:mx-[20px] mb-[30px] ">
            <div>
              <div className="bg-[#e3e4eb] w-full p-6 md:p-8 pb-0 md:pb-0 border rounded-[20px]">
                <h2 className="text-[30px] mb-4 text-black font-bold uppercase md:text-[20px]">
                  Live Stream
                </h2>
                <h6 className="text-xl md:text-2xl leading-tight">
                  Plug and play your audio using our mobile or desktop broadcast
                  apps.
                </h6>
                <p>
                  Enjoy world-leading audio quality, scalability, and audience
                  engagement tools like live chat.
                </p>
                <img
                  src={liveStream}
                  className="w-full h-full"
                  alt="LiveStream Image"
                />
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Product;
