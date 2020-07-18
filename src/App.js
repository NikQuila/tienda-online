import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const MarioPage = () => (
  <div>
    <h1>Mario Page</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={HomePage}></Route>{" "}
        <Route path="/mario" component={MarioPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
