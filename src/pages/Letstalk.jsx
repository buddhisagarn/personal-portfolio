// import { Form } from "react-router-dom";
// import { Form } from "react-router-dom";
// import EmailComposer from "../components/EmailComposer";
// import Form from "../components/form";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import work from "../js/myWork";

function LetsTalk() {
  return (
    <div>
      <Navbar />
      <hr className="border" />
      <h1 className="text-white fw-light mt-5 ms-5 ps-4">Lets Talk</h1>
      <p className="ms-5 p-4">
        I am a Web Developer, currently doing something better and more
        professional website and now I need some team to collaborate with. If
        you need any kind of help related to tech, fill up the form below and
        feel free to contact me.
      </p>
      <hr className="border" />
      <div className="flex-column p-4 pt-0">
        {work.map((item) => (
          <div key={item.id} className="m-5 flex-column">
            <h4 className="text-white ">{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      <hr className="border" />
      <Footer />
    </div>
  );
}

export default LetsTalk;
