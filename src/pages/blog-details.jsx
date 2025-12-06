import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
import { blogDetailsData } from "../js/blogs-data";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Blog() {
  const { id } = useParams();
  const blog = blogDetailsData.find((blog) => blog.id.toString() === id);
  console.log(blog);
  if (!blog) {
    return <p className="text-white">Blog not found</p>;
  }
  return (
    <div className="blog-details-sec">
      <Navbar />
      <div className="blog-section">
        <div className="container p-4 blog-details">
          <h1 className="mb-4 text-dark blog-heading">{blog.title}</h1>
          <p className="mb-4 text-dark blog-summary">{blog.summary}</p>
          {blog.content.map((section, index) => {
            if (section.type === "question") {
              return (
                <>
                  <Accordion className="blog-accordion">
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="blog-question"
                    >
                      <Typography component="span">
                        <p key={index} className="mb-3 text-dark ">
                          {section.question}
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="blog-content">
                      <Typography>
                        <p className="text-dark ">{section.content}</p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            }
            if (section.type === "list") {
              return (
                <>
                  <Accordion className="blog-accordion">
                    <AccordionSummary
                      expandIcon={<ArrowDownwardIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="blog-question"
                    >
                      <Typography component="span">
                        <p key={index} className="mb-3 text-dark ">
                          {section.question}
                        </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="blog-content">
                      <Typography>
                        <ul
                          style={{
                            listStyleType: "circle",
                            paddingLeft: "20px",
                          }}
                        >
                          {section.items.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>
              );
            }
          })}
        </div>
      </div>
      <Footer />
      <button className="backbutton-blog" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
}
