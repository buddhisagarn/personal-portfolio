import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home-page";
import About from "./pages/about/about";
// import Work from "./pages/works/work";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import LetsTalk from "./pages/Letstalk";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/letstalk" element={<LetsTalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
