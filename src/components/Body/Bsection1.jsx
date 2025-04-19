import "./Bsection1.css";
import { image } from "../../../Data/image";
export default function Bsection1() {
  return (
    <div className="main-div">
      {image.map((item, index) => (
        <div className="image-collections" key={index}>
          <img src={item?.imageUrl} alt={item?.title} />
          <h3 style={{ color: "white" }}>{item?.title}</h3>
          <p style={{ color: "white" }}>{item?.discription}</p>
        </div>
      ))}
    </div>
  );
}
