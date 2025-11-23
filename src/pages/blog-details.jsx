import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { blogDetailsData } from "../js/blogs-data";

export default function Blog() {
  const { id } = useParams();
  const blog = blogDetailsData.find((blog) => blog.id.toString() === id);
  if (!blog) {
    return <p>Blog not found</p>;
  }
  return (
    <div>
      <Navbar />
      <div className="blog-section">
        <div className="container p-4 blog-details">
          <h1 className="fw-bold fs-2 text-center mb-4 text-dark">
            {blog.title}
          </h1>
          <p className="text-center mb-4 text-dark">{blog.summary}</p>
          {blog.content.map((section, index) => {
            if (section.type === "paragraph") {
              return (
                <p key={index} className="mb-3 text-dark">
                  {section.content}
                </p>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
