import "./App.css";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";
import { BrowserRouter as Router} from "react-router-dom";
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
