import "./Header.css";
function Header() {
  return (
    <>
      <div className="mid">
        <a href="" id="home">
          {" "}
          <i className="fa-solid fa-house i-n"></i> Home
        </a>
        <a href="" id="service">
          <i className="fa-solid fa-info i-n"></i> Service
        </a>
        <a href="" id="contact">
          <i className="fa-solid fa-phone i-n"></i> Contact
        </a>
        <a href="" id="resume">
          <i className="fa-solid fa-file i-n"></i> Resume
        </a>
        <a href="" id="blog">
          <i className="fa-solid fa-blog i-n"></i> Blog
        </a>
        <a href="" id="menu">
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
      <hr className="hr-1" />
    </>
  );
}
export default Header;
