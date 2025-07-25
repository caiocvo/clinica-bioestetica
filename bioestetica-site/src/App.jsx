import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
