import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <News />
      <Footer />
    </div>
  );
};

export default App;
