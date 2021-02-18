import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />

      {/* prop  */}
      <Footer name='ICE.CM' year={2021} age={25} phone='0611534277' isOpen={true}/>
    </div>
  );
}

export default App;
