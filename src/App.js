import {BrowserRouter,Switch, Route } from "react-router-dom";
import "./App.css";
import ListadoPeliculas from "./views/ListadoPeliculas";
import Blog from "./views/Blog";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog">
          <Blog></Blog>
        </Route>

        <Route path="/">
          <ListadoPeliculas></ListadoPeliculas>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
