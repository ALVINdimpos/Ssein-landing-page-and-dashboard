import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./dashboard/pages/home";
import NoPage from "./pages/NoPage";
import whatsap from "./assets/image/whatsap.svg";
export default function App() {
const openWhatsAppChat = () => {
  const phoneNumber = "+250787256182"; 
  const message = "Hello! I have a question.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappLink, "_blank");
};

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Home />
              <button
                onClick={openWhatsAppChat}
                style={{
                  position: "fixed",
                  bottom: "20px",
                  right: "20px",
                  backgroundColor: "#25d366", 
                  padding: "10px",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <img
                  src={whatsap}
                  alt="WhatsApp Chat"
                  style={{
                    width: "40px",
                    height: "auto",
                    display: "block",
                  }}
                />
              </button>
            </div>
          }
        />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
