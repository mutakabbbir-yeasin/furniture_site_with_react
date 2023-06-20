import { Carousel } from "react-responsive-carousel";
import brands from "../../../public/brands.json";
import "./Home.css";

const Brands = () => {
  const brandSets = [];
  console.log(brands);
  for (let i = 0; i < brands.length; i += 5) {
    brandSets.push(brands.slice(i, i + 5));
  }
  return (
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
              <img src={brand.logoLink} alt={brand.name} className="mx-auto" />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default Brands;
