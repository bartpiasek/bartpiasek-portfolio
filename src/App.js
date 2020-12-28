import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
