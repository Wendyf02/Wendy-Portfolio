import React from "react";
import NavBar from "./components/NavBar"
import Home from "./components/Home"

import './App.css';

function App() {
  return (
    <div>
      <switch>
        <Route exact path={["/"]}>
            <Jumbotron />
             <Home />
        </Route>


      </switch>
   
    </div>
  );
}

export default App;
