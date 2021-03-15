import "./App.css";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RoutePageContent from "./components/layouts/RoutePageContent";

const App = () => {
  return (
    <Router>
      <NavBar />
      <RoutePageContent/>
      <Footer />
    </Router>
  );
};

export default App;
