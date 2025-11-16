import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { projectWork } from "../../js/projectWork";
import "../../../stylesheets/index.css";
import ScrollToTop from "../../components/ScrollToTop";

const Work = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="mt-5 project-work">
        {projectWork.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => window.open(item.url)}
              className="project-work-specific"
            >
              <img
                src={item.image}
                style={{
                  height: "200px",
                  width: "300px",
                  borderRadius: "10px",
                }}
              />
              <h4 className="pt-3 text-white">{item.title}</h4>
              <p className=" w-75">{item.content}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Work;
