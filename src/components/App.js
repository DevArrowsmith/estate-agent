import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/new" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
