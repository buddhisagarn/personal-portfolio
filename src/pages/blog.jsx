// 1. Import the data file
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import blogData from "../js/blogs-data";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="blog-page section">
        <div className="container">
          <div className="blog-grid">
            {blogData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogdetails/${blog.id}`}
                className="blog-card p-2"
              >
                <div className="blog-card-image">
                  <img src={blog.imageUrl} alt={blog.title} />
                </div>
                <div className="blog-card-body">
                  <p className="blog-card-meta">
                    {blog.author} · {blog.date}
                  </p>
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-summary">{blog.summary}</p>
                  <span className="blog-card-cta">Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
