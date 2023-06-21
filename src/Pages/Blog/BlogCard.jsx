import { BsArrowRight, BsPerson } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log(typeof blog);
  const {
    title,
    author_name,
    category,
    comment,
    date,
    description,
    image_link,
  } = blog || {}; // Set default empty object if 'blog' is undefined

  const shortDescription = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div>
      <div className="w-5/6 gap-10 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full object-cover"
          src={image_link}
          alt=""
        />

        <div className="p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div className="flex justify-between my-4">
            <div className="flex gap-3 font-bold">
              <BsPerson />
              <p className="-mt-1">{author_name}</p>
            </div>
            <div className="flex  gap-3">
              <BiCommentDetail />
              <p className="-mt-1"> {comment} Comments </p>
            </div>
            <div className="flex gap-3">
              <MdOutlineCategory />
              <p className="-mt-1"> {category}</p>
            </div>
          </div>

          <p className=" font-normal text-gray-700 dark:text-gray-400">
            {shortDescription(description, 20)}
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between mx-4  ">
          <div className="flex gap-3 p-5">
            <SlCalender />
            <p className="-mt-1">{date}</p>
          </div>
          <div>
            <Link to="/" className="btn btn-neutral ">
              Read more
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
