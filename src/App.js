import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Registration from "./Components/Registration";

//followed example in task pdf
function App() {
  return (
    // header shown on every page
    <div className="App">
      <Header />
      <br />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/reg" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
