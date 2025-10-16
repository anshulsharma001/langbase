import "./App.css";
import About from "./components/About";
import Explore from "./components/Explore";
import FutureOfAi from "./components/FutureOfAi";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-black">
      <About />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
