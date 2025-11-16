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
        I am a Web Developer, Currently working in front-end development in
        React. I had a lot of good experience on this field and I find my joy
        ,Some times I got lost also.
      </p>
      <hr className="border" />
      <h1 className="text-white ms-5 ps-4">Contact me </h1>
      <p className="ms-5 ps-4 text-primary">rabinyaupane55@gmail.com</p>
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
