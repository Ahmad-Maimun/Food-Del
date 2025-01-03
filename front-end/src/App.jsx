import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOreder/PlaceOrder";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
