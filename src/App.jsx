import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import CareerRoleDetail from "./pages/CareerRoleDetail";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers/:slug" element={<CareerRoleDetail />} />
        </Routes>
      </main>
      <Footer />
      <div className="fab-stack">
        <BackToTop />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
