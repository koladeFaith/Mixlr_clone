// import Card from "./Card";
import Img1 from "../assets/live-stream-454-a45b8ca727568f4bfc99a9a34caafaded752949518f28d91028db5d97e202083.webp";
import Img2 from "../assets/host-454-08f4c3960c96b1bd93a79c1c5709a938cc13b7aed13e188cf28b69371fa79ab8.png";
import Img3 from "../assets/distribute-454-6ae51500cdd3894417f10e1d91543bf4a0bd46583678d62e6643104429282cc5.webp";
import Img4 from "../assets/integrate-454-3e8db1d3b915cec36162904840fa0c7236a664f61aadfb3ea1b24fa5a05d0589.png";
import Img5 from "../assets/customize-454-123ec51a80d1687c66cbafbb3c2774a396e93f8be64005771cdf65a4555c5a1b.png";

function Product() {
  return (
    <>
      <section className="lg:w-3/4 w-full  mx-auto">
        <div>
          {/* HEADING */}
          <h1 className=" uppercase text-[35px] md:text-[40px] pb-14 mx-auto lg:w-[95%] lg:text-[55px]   text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-extrabold ">
            the complete flatform for{" "}
            <span className="text-red-600 font-extrabold">
              professional audio
            </span>{" "}
          </h1>
          {/* CARD */}
          <div>
            <CardList />
          </div>
          <p className="text-red-600 font-extrabold text-[24px] md:[40px] mb-[20px] uppercase text-center">
            View all features
          </p>
        </div>
      </section>
    </>
  );
}
export default Product;

const cardData = [
  {
    name: "Live Stream",

    description:
      " Plug and play your audio using our mobile or desktop broadcast apps.  ",
    image: Img1,
  },
  {
    name: "Host",

    description:
      "Listeners can visit your entire archive of past broadcasts and uploaded files, and share direct links to their favorites.",
    image: Img2,
  },
  {
    name: "Distribute",

    description:
      "Distribute content via custom players, apps and websites. Listeners can add your podcast to their favorite apps.",
    image: Img3,
  },
  {
    name: "Integrate",

    description:
      "API access, SDKs, dedicated listening apps, hosting your channel on your own domain and more...",
    image: Img4,
  },
  {
    name: "Customize",

    description:
      "Our advanced customization options allow enterprise creators to maintain and express their brand identity.",
    image: Img5,
  },
];
function Card({ name, description, image }) {
  return (
    <>
      <div className="bg-[#e3e4ebbb] w-full pl-5 md:pl-8 pb-0 md:pb-0 border  rounded-[10px]">
        <h2 className="text-[33px] mb-4 text-black font-extrabold uppercase md:text-[29px]">
          {name}
        </h2>
        <p className="text-[20px] md:w-3/4 font-normal leading-7 mb-2">
          {description}
        </p>
        <img src={image} className="w-full " alt="" />
      </div>
    </>
  );
}
// CARDLIST
function CardList() {
  return (
    <>
      <div className="mx-[20px] lg:mx-[60px] xl:mx-[80px] mb-[20px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {cardData.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}
