import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
