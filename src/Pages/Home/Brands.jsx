import { Carousel } from "react-responsive-carousel";
import brands from "../../../public/brands.json";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

const Brands = () => {
  const brandSets = [];
  // console.log(brands);
  for (let i = 0; i < brands.length; i += 5) {
    brandSets.push(brands.slice(i, i + 5));
  }
  return (
    <div
      className="flex items-center justify-center my-16 "
      data-aos="slide-up"
      data-aos-delay="500"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <Carousel
        showThumbs={false}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // Set the interval time for automatic sliding (in milliseconds)
        emulateTouch={true}
        dynamicHeight={false}
        className="my-carousel mt-16" // Add any custom CSS classes here
      >
        {brandSets.map((brandSet, index) => (
          <div key={index} className="flex justify-center">
            {brandSet.map((brand) => (
              <div key={brand.name} className="w-1/4 px-4">
                <img
                  src={brand.logoLink}
                  alt={brand.name}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Brands;
