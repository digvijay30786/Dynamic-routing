import "./styles.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import ProductsItems from "./components/products-items";
import PageNotFound from "./components/notfoundpage";
export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" className="href">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="href">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/Unknown" className="href">
              Unknown
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductsItems />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}
