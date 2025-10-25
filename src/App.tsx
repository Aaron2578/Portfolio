import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import Contactus from "./pages/Contactus";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
