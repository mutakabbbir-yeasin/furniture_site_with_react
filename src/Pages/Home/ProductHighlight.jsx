import img1 from "../../assets/ProductHighlight/h2_banner-1.jpg";
import img2 from "../../assets/ProductHighlight/h2_banner-2.jpg";
import img3 from "../../assets/ProductHighlight/h2_banner-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  // delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000,
});
const ProductHighlight = () => {
  return (
    <div
      className="my-16 "
      data-aos="slide-up"
      // data-aos-delay="100"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
          <div className="h-auto w-auto">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img1}
              alt=""
            />
          </div>
          <div className="absolute flex -my-40 flex-col justify-center ps-8 transition-all duration-500 ">
            <p className="text-1xl font-bold uppercase">new</p>
            <p className="text-4xl font-bold text-black mt-3">Chair</p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
          <div className="h-auto w-auto">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img2}
              alt=""
            />
          </div>
          <div className="absolute flex -my-40 flex-col justify-center ps-8 transition-all duration-500 ">
            <p className="text-1xl font-bold uppercase">hot</p>
            <p className="text-4xl font-bold text-black mt-3">Stools</p>
          </div>
        </div>

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden ">
          <div className="h-auto w-auto">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              src={img3}
              alt=""
            />
          </div>
          <div className="absolute flex -my-40 flex-col justify-center ps-8 transition-all duration-500 ">
            <p className="text-1xl font-bold uppercase">sale</p>
            <p className="text-4xl font-bold text-black mt-3">Lightings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
