import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FoodOrder from "./dashboard/pages/foodOrder";
import OrdersHistory from "./dashboard/pages/orderHistory";
import Dashboard from "./dashboard/pages/home";
import Message from "./dashboard/pages/message";
import Billing from "./dashboard/pages/billing";
import Setting from "./dashboard/pages/settings";
import Restourant from "./dashboard/pages/retourant";
import FoodMenu from "./dashboard/pages/menu";
import Orders from "./dashboard/pages/driversOrder";
import Reviews from "./dashboard/pages/reviews";
import Drivers from "./dashboard/pages/drivers";
import FeedBacks from "./dashboard/pages/driversFeedback";
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
        <Route path="/dashboard/food-order" element={<FoodOrder />} />
        <Route path="/dashboard/order-history" element={<OrdersHistory/>} />
        <Route path="/dashboard/restourant/orders" element={<OrdersHistory/>} />
        <Route path="/dashboard/message" element={<Message />} />
        <Route path="/dashboard/bill" element={<Billing />} />
        <Route path="/dashboard/setting" element={<Setting />} />
        <Route path="/dashboard/restourant" element={<Restourant/>} />
        <Route path="/dashboard/restourant/menu" element={<FoodMenu />} />
        <Route path="/dashboard/restourant/orders" element={<FoodOrder />} />
        <Route path="/dashboard/drivers/orders" element={<Orders />} />
        <Route path="/dashboard/restourant/reviews" element={<Reviews />} />
        <Route path="/dashboard/drivers" element={<Drivers />} />
        <Route path="/dashboard/drivers/feedbacks" element={<FeedBacks/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
