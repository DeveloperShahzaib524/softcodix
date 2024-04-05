import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Header/Navbar";

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  )
}

export default App
