import './App.css';
import Header from './component/Home';
import Nav from './component/Nav';
import Main from './component/Main';
import Footer from './component/Footer';
import Special from './component/Special';
import About from './component/About';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
     <Header />
      <Nav />
      <Main />
      <Special />
      <About />
      <Footer />
    </>
  );
}

export default App;
