import "./App.css";
import Bsection1 from "./components/Body/Bsection1.jsx";
import Bsection2 from "./components/Body/Bsection2.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
function App() {
  return (
    <>
      <Header />
      <Bsection1 />
      <Bsection2 />
      <Footer />
    </>
  );
}

export default App;
