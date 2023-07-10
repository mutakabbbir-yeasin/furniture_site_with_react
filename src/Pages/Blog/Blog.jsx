import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Title from "../../Shared/Title";
import HomeBlogCard from "./HomeBlogCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductSkeleton from "../Products/ProductSkeleton";

AOS.init({
  offset: 300,
  duration: 1000,
});

const Blog = ({ homeBlog }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlog(data));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading && <ProductSkeleton />}
      {!isLoading && (
        <div
          className="my-16 "
          data-aos="slide-up"
          data-aos-offset="300"
          data-aos-duration="1000"
        >
          <Title
            className="px-4 md:px-3"
            heading={"Our Blog"}
            subHeading={
              "Find a bright ideal to suit your taste with our great selection"
            }
          />
          {homeBlog ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs?.slice(0, 3).map((blog) => {
                  return <HomeBlogCard key={blog.id} blog={blog} />;
                })}
              </div>
              <div className="text-center my-10">
                <Link
                  to="/blog"
                  className="btn bg-[#cd8f5c] text-white hover:bg-white hover:border-[#cd8f5c] hover:text-[#cd8f5c]  "
                >
                  Show More Blogs
                </Link>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs?.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Blog;
