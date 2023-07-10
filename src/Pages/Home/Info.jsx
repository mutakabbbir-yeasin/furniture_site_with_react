import { BsBookmark } from "react-icons/bs";
import { ImClock } from "react-icons/im";
import { TbFileDollar } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

const Info = () => {
  return (
    <div
      className="flex items-center justify-center text-white bg-[#cd8f5c] my-16 "
      data-aos="slide-up"
      data-aos-delay="500"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 info p-10">
        <div className="left p-12">
          <div className="flex gap-6">
            <ImClock className="w-10 h-10" />
            <div>
              <h2 className="text-3xl font-bold">90 Days Return</h2>
              <p className="mt-2">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="middle p-12">
          <div className="flex gap-6">
            <BsBookmark className="w-10 h-10" />
            <div>
              <h2 className="text-3xl font-bold">Free Delivery</h2>
              <p className="mt-2">
                For all orders over $50, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="right p-12">
          <div className="flex gap-6">
            <TbFileDollar className="w-10 h-10" />
            <div>
              <h2 className="text-3xl font-bold">Secure Payment</h2>
              <p className="mt-2">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
