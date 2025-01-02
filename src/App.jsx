import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
