import React from "react";
import "./App.css";
import "./responsive.css";
import NavBar from "./components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import { Home } from "./components/Pages/Home";
import { Products } from "./components/Pages/Products";
import AboutUs from "./components/Pages/AboutUs";
import { Contact } from "./components/Pages/Contact";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/cart/:id" component={CartScreen} />
        <Route exact path="/shipping" component={ShippingScreen} />
        <Route exact path="/payment" component={PaymentScreen} />
        <Route exact path="/placeorder" component={PlaceOrderScreen} />
        <Route exact path="/order" component={OrderScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
