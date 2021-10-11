import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/detail/:id" exact component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
