import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Favourites from "./components/Favourites";

function App() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <Home />
      <Favourites />
    </div>
  );
}

export default App;
