import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Header from "./components/Header";
import Male from "./pages/Male";
import Female from "./pages/Female";
import Groceries from "./pages/Groceries";
import Appliances from "./pages/Appliances";
import Cart from "./pages/Cart";
import LogOut from "./pages/LogOut";
import AdminAuth from "./pages/AdminAuth";
import Checkout from "./components/checkout/Checkout";

function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion/male" element={<Male />} />
            <Route path="/fashion/female" element={<Female />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<AdminAuth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/shipping" element={<Checkout />} />
         </Routes>
      </div>
   );
}

export default App;
