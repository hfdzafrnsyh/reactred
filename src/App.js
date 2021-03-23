import React from "react";
import './App.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Home from "./components/Home.Component";
import Navbar from "./components/navbar/Navbar.Component";
import Contact from "./components/Contact.Component";
import DetailTodo from "./components/DetailTodo.Component";
import NotFound from "./components/status/NotFound.Component";

class App extends React.Component {
 

  render(){
    return(
      <Router>
        <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/todo/:todo_id" component={DetailTodo}/>
          <Route exact component={NotFound}/>
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
