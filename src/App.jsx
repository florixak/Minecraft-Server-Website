import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Minigames from "./pages/Minigames.jsx";
import News from "./pages/News.jsx";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store.jsx";
import Rules from "./pages/Rules.jsx";
import Staff from "./pages/Staff.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";

const App = () => {
  return (
    <div className="relative flex h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />
      <Routes>
        <Route index element={<News />} />
        <Route path="minigames" element={<Minigames />} />
        <Route path="store" element={<Store />} />
        <Route path="rules" element={<Rules />} />
        <Route path="staff" element={<Staff />} />
        <Route path="faq" element={<Staff />} />
        <Route path="recruitment" element={<Staff />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
