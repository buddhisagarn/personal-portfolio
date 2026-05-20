import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home-page";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
