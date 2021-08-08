import React from "react";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Project from "./Components/Project"
import About from "./Components/About"
import Contact from "./Components/Contact"
import './App.css';


function App() {
  return (
    
    <Router> 
  <Switch> 
  <Route exact path={"/"}>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Contact/>

  </Route>

  </Switch>
    {/* // <div>
    //   <Switch>
    //     <Route exact path={["/"]}>
    //         <Navbar/>
    //          <Home />
    //     </Route>
    //   </Switch>
   
    //  </div> */}

    </Router>
  );
}

export default App;
