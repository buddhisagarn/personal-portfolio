import Home from "./icons/Home";
import Menu from "./Menu";
import Search from "./Search";

export default function Nav() {
  return (
    <div className="nav">
      <div className="left-nav">
        <Menu />
        <Search />
      </div>
      <div className="right-nav">
        <Home />
      </div>
    </div>
  );
}
