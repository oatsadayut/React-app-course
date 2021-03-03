import './App.css';
import Footer from './components/layouts/Footer';
import NavBar from './components/layouts/NavBar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <NavBar/>
        <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
