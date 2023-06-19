import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../assets/banner/banner-1.gif";
import slider2 from "../../assets/banner/banner-2.gif";
import slider3 from "../../assets/banner/banner-3.gif";

const Banner = () => {
  return (
    <Carousel className="z-0 ">
      <div>
        <img src={slider1} />
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
    </Carousel>
  );
};

export default Banner;
