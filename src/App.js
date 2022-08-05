import "./App.css";
import { Home } from "./pages/Home.js";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>}/>
    </Routes> 
  );
}

export default App;
