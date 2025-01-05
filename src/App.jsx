import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailedProperty from "./pages/DetailedProperty";

// App component including routing logic
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
