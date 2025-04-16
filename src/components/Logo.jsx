import image1 from "../assets/new-york-red-bulls-43d601c5295b5573c5455fcf08df19289ec880821f2996cab4c61176add020af.jpg";
import image2 from "../assets/virgin-atlantic-5f4ddf383c273618b43044cf1772b85d6beaedefff84fecbf8a0115a4ab8d092.jpg";
import image3 from "../assets/belleville-senators-d62d07c2aaff79518b09d2f161b7fbfa5f19d580f5b530f74a3612ae6b8ff18e.jpg";
import image4 from "../assets/green-bay-dbe7527a02e38d2eebca5d9d8dc9edfd6921661b366eab050b5c7b8ae11e474c.jpg";
import image5 from "../assets/harvesters-church-4e36943acb9562bf69b91b82dcc0f257725351cfa8be30bd0f8c67da1b9285f1.jpg";
import image6 from "../assets/new-york-city-fc-4f3ce105af2a526ce3de98e97b2603aadb6469ca1613ba3e0329464be2e017c2.jpg";
import image7 from "../assets/indycar-7f5c7fb4d6f849bff6b7986a5def5dc7f02219fe2410b4d5b9e01d2a5cd141c4.jpg";
import image8 from "../assets/redbull-salzburg-8123796dc768b5007cdcb5622db45f9035182984754df5c564c2af58205d9cc5.jpg";
import image9 from "../assets/ryan-jespersen-f99e7084a7fca39bebdf8be42f713d0f85632e2cc6b35c476ac83a802975370d.jpg";
import image10 from "../assets/washington-wild-things-0026b2a066fda8519812222df24e349304e8f594003833ea7c24a3f0142d37c8.jpg";
import image11 from "../assets/straubing-tigers-f8a33a1fc93b43ebfb81c18adb9d400ac3419c87b89cc837fa9a2a6edb157168.jpg";
import image12 from "../assets/obama-foundation-096c9f2cbf7afd2473b7dd7f510ae0fa84e9ece1455dcc3bfbc6f28d024334b9.jpg";

function Logo() {
  return (
    <>
      <h1 className=" uppercase text-[35px] md:text-[40px] pb-10 pt-16 mx-auto lg:w-2/5  w-3/5 lg:text-[55px]   text-center md:leading-[40px] leading-[29px] lg:leading-[50px] text-black font-extrabold ">
        You're in{" "}
        <span className="text-red-600 font-extrabold">good company...</span>{" "}
      </h1>
      <div className=" grid grid-cols-3 md:grid-cols-6 gap-[30px]   lg:w-3/4 md:mx-auto mb-[60px]">
        {LogoData.map((logo, i) => (
          <Logos key={i} images={logo.images} />
        ))}
      </div>
    </>
  );
}

export default Logo;

const LogoData = [
  { images: image1 },
  { images: image2 },
  { images: image3 },
  { images: image4 },
  { images: image5 },
  { images: image6 },
  { images: image7 },
  { images: image8 },
  { images: image9 },
  { images: image10 },
  { images: image11 },
  { images: image12 },
];
function Logos({ images }) {
  return (
    <>
      <img
        src={images}
        className="w-[90px] md:w-[120px] lg:w-[140px]"
        alt="Logo image"
      />
    </>
  );
}
