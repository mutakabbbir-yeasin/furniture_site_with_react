import { SlCalender } from "react-icons/sl";
import { MdOutlineCategory } from "react-icons/md";

const HomeBlogCard = ({ blog }) => {
  console.log(typeof blog);
  const { title, category, date, image_link } = blog || {}; // Set default empty object if 'blog' is undefined

  return (
    <>
      <div>
        <div className="w-80 gap-10 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg w-full object-cover"
            src={image_link}
            alt=""
          />

          <div className="p-4">
            <div className="flex justify-between my-4">
              <div className="flex gap-3">
                <MdOutlineCategory />
                <p className="-mt-1"> {category}</p>
              </div>
              <div className="flex gap-3">
                <SlCalender />
                <p className="-mt-1">{date}</p>
              </div>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogCard;
