import Globe from "./icons/Globe";
import Home from "./icons/Home";
import Linkedin from "./icons/Linkedin";
import Mail from "./icons/Mail";
import Message from "./icons/Message";
import Menu from "./Menu";
import Search from "./Search";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-in">
        <div className="left-nav">
          <Menu />
          <Search />
        </div>
        <div className="right-nav">
          <Home />
          <Globe />
          <Linkedin />
          <Mail />
          <Message />
        </div>
        <div className="last-nav">
          <i className="fa-solid fa-microphone"></i>
        </div>
      </div>
    </div>
  );
}
