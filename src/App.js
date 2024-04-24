import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import Special from './component/Special';
import About from './component/About';
function App() {
  return (
    <>
     <Header />
      <Nav />
      {/* Contenu principal */}
      <Main />
      <Special />
      <About />
      <Footer />
    </>
  );
}

export default App;
