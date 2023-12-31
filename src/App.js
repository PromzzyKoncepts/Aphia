import { Routes, Route, useLocation } from "react-router-dom";
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
import Protected from "./HOC/Protected";
import NotFound from "./components/404";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
   const location = useLocation();

   // I did this part to determine if the header should be displayed
   const isDashboardRoute = location.pathname === "/dashboard";
   const showHeader = !isDashboardRoute;


   return (
      <div className="App">
         {showHeader && <Header />}
         
         
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fashion/male" element={<Male />} />
            <Route path="/fashion/female" element={<Female />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path="/accessories" element={<Appliances />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<AdminAuth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/shipping" element={<Protected />}>
               <Route index element={<Checkout />} />
            </Route>
            <Route path="/dashboard" element={<Protected />}>
               <Route index element={<Dashboard />} />
            </Route>

            {/* 404 PAGE */}
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
