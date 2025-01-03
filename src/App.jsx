import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedProperty from "./pages/DetailedProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<DetailedProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
