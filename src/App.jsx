import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";

function App() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <Home />
    </div>
  );
}

export default App;
