import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { blogDetailsData } from "../js/blogs-data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Blog() {
  const { id } = useParams();
  const blog = blogDetailsData.find((item) => item.id.toString() === id);

  if (!blog) {
    return (
      <div className="blog-details-page">
        <Navbar />
        <div className="container section">
          <p className="text-center text-white">Blog not found.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="blog-details-page">
      <Navbar />

      <div className="container">
        <article className="blog-article">
          <header className="blog-article-header">
            <p className="blog-article-meta">
              {blog.author} · {blog.date}
            </p>
            <h1 className="blog-article-title">{blog.title}</h1>
            <p className="blog-article-summary">{blog.summary}</p>
          </header>

          <div className="blog-article-content">
            {blog.content.map((section, index) => (
              <Accordion
                key={index}
                className="blog-accordion"
                TransitionProps={{ unmountOnExit: true }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  className="blog-question px-2 rounded-5xl"
                >
                  <Typography component="span">
                    <span className="blog-question-text">
                      {section.question}
                    </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="blog-content">
                  <Typography>
                    {section.type === "question" ? (
                      <p>{section.content}</p>
                    ) : (
                      <ul className="blog-list">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>

          <div className="blog-back-row">
            <button
              className="backbutton-blog"
              onClick={() => window.history.back()}
            >
              Back to blog
            </button>
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
