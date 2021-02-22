import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Header />

      {/* prop  */}
      <Footer name='ICE.CM' year={2021} age={25} phone='0611534277' isOpen={true}/>
      <hr />
      <Sidebar />
    </div>
  );
}

export default App;
