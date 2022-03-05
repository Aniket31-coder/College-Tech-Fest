import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Events from "./pages/Events";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
import './App.css';
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="App">
      <Router >
        <NavbarComponent />
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
