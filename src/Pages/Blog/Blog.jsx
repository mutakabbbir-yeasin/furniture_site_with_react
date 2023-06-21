import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Title from "../../Shared/Title";
import HomeBlogCard from "./HomeBlogCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 300,
  duration: 1000,
});

const Blog = ({ homeBlog }) => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(
      "https://api.json-generator.com/templates/wpdVwhRGKHF0/data?access_token=xa5w6emfbnypcahxuu7ex7n0c4hk9i1uhn6gi5ke"
    )
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <>
      <div
        className="my-16 "
        data-aos="slide-up"
        data-aos-offset="300"
        data-aos-duration="1000"
      >
        <Title
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
            </div>{" "}
            <div className="text-center my-10">
              <Link to="/blog" className="btn btn-neutral ">
                Show More Blogs
              </Link>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs?.map((blog) => {
              // console.log(blog);
              return <BlogCard key={blog.id} blog={blog} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
