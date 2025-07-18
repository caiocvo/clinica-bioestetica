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
      <Hero />
      <main>
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
