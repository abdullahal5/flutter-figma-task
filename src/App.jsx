import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Screens from "./components/Screens";
import Slider from "./components/Slider";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="flex">
      <div>
        <Slider />
      </div>
      <div className="w-[1050px] mx-auto pt-5">
        <Navbar />
        <Title/>
        <Projects/>
        <Screens/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
