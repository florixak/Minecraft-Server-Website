import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-robotos-slab relative flex flex-col overflow-x-hidden text-white">
      <Header />
      <News />
      <Footer />
    </div>
  );
};

export default App;
