import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { ProductListing } from "./components/ProductListing";
import { ProductDetail } from "./components/ProductDetail";
import Product from "./components/Product";
import { Cart } from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/product" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
