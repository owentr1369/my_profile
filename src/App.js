import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigations";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Pictures from "./pages/Pictures/Pictures";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pictures" element={<Pictures />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
