import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Pages/Contact/Contact";
import HowILearn from "./components/Pages/HowLearn/HowLearn";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/learning-path" component={HowILearn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
