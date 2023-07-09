import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { BsFacebook, BsPerson, BsPinterest } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { AiFillHeart, AiFillEye, AiFillTwitterCircle } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

const ViewBlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlog] = useState([]);

  const singleBlog = blogs.find((item) => item.id * 1 === id * 1);
  // console.log(singleBlog);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      "https://api.json-generator.com/templates/wpdVwhRGKHF0/data?access_token=xa5w6emfbnypcahxuu7ex7n0c4hk9i1uhn6gi5ke"
    )
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const {
    title,
    author_name,
    category,
    comment,
    date,
    description,
    image_link,
    likes,
    views,
  } = singleBlog || {};

  return (
    <div className="p-10">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-5">
          {title}
        </h5>
        <div className="  sm:grid md:flex">
          <div>
            <div className="flex">
              <SlCalender />
              <p className="-mt-1 px-3">{date} </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <BsPerson />
              <p className="-mt-1 px-3">{author_name} </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <MdOutlineCategory />
              <p className="-mt-1 px-3">{category} </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <AiFillHeart />
              <p className="-mt-1 px-3">
                {likes}{" "}
                {likes * 1 > 1 ? "likes" : likes * 1 === 1 ? "like" : "0 likes"}{" "}
              </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <MdOutlineCategory />
              <p className="-mt-1 px-3">{category} </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <AiFillEye />
              <p className="-mt-1 px-3">
                {views}
                {views * 1 > 1
                  ? " views"
                  : views * 1 === 1
                  ? " view"
                  : "0 views"}
              </p>
              <p className="-mt-1 pl-4 pr-2 hidden sm:hidden md:flex">||</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <BiCommentDetail />
              <p className="-mt-1 px-3">
                {comment}
                {comment * 1 > 1
                  ? " comments"
                  : comment * 1 === 1
                  ? " comment"
                  : "0 comment"}
              </p>
            </div>
          </div>
        </div>
        <img className="mx-auto my-16" src={image_link} alt="" />
        <p>{description}</p>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold my-4">Share this post</h3>
        <div className="gap-6">
          <FacebookShareButton
            url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
          >
            <BsFacebook className="w-12 h-12 " />
          </FacebookShareButton>

          <PinterestShareButton
            url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
          >
            <BsPinterest className="w-12 h-12 mx-2 " />
          </PinterestShareButton>

          <TwitterShareButton
            url={`https://enchanting-longma-0ffd29.netlify.app/blog/${id}`}
          >
            <AiFillTwitterCircle className="w-14 h-14 " />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogDetails;
