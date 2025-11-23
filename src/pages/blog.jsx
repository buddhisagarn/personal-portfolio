// 1. Import the data file
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import blogData from "../js/blogs-data";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="container p-4 d-flex justify-content-between gap-4 blogs-details">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="blog-post w-100 "
            onClick={() => navigate(`/blogdetails/${blog.id}`)}
          >
            <img src={blog.imageUrl} alt={blog.title} className=" w-100 h-50" />
            <h1 className="fw-normal fs-4 text-white bg-danger">
              {blog.title}
            </h1>
            <p className="text-white  bg-info">
              By {blog.author} around {blog.date}
            </p>
            <p className="text-white">{blog.summary}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
