import './App.css';
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./Pages/Success";
import Signup from "./Pages/Signup";
import AllProducts from "./Pages/AllProducts";
import LandingPage from "./Pages/LandingPage";
import AddProduct from "./Admin/Components/AddProduct";
import Myorders from "./Admin/Components/Myorders";
import DisplayProducts from "./Admin/Components/DisplayProducts";
import { useSelector } from 'react-redux';
import Userorders from './Pages/Userorders';
import AdminSignup from './Admin/Components/AdminSignup';
import AdminLogin from './Admin/Components/AdminLogin';

function App() {
    const user = useSelector((state) => state.user.currentUser);
    const IsAdmin= user?.type==="Admin"?true:false;

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/shop" element={<Home />} />
        <Route exact path="/products" element={<AllProducts />} />
        <Route exact path="/statusupdate" element={user ? <Userorders />: <Navigate to="/login" />}/>
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/products/product/:id" element={<Product />} />
        <Route exact path="/adminsignup" element={<AdminSignup />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route exact path="/admin/product/add" element={IsAdmin?<AddProduct/>:<Navigate to="/adminlogin" />} />
        <Route exact path="/admin/product/display" element={IsAdmin?<DisplayProducts />:<Navigate to="/adminlogin" />} />
        <Route exact path="/admin/orders" element={IsAdmin?<Myorders />:<Navigate to="/adminlogin" />} />
        <Route exact path="cart" element={user ? <Cart /> : <Navigate to="/login" />}/>
        <Route exact path="/success/:paymentid" element={<Success />} />
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route exact path="/signup" element={user ? <Navigate to="/" /> : <Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
