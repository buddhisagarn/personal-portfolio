// import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { projectWork } from "../../js/projectWork";

const Work = () => {
  return (
    <>
      <Navbar />
      <div
        className="grid  p-5"
        style={{ gridTemplateColumns: "auto auto auto" }}
      >
        {projectWork.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => window.open(item.url)}
              className=""
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
              <p className="w-75 pb-5">{item.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Work;
