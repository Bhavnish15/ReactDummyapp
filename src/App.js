import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./Styles/App.scss";
import "./Styles/header.scss";
import Home from "./Components/Home";
import "./Styles/home.scss";
import Footer from "./Components/Footer";
import "./Styles/Footer.scss";
import Contact from "./Components/Contact";
import "./Styles/Contact.scss";
import Services from "./Components/Services";
import "./Styles/mediaQueries.scss";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
