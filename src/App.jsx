import "./App.css";
import Acessorios from "./components/Acessorios/Acessorios";
import Contato from "./components/Contato/Contato";
import Home from "./components/Home/Home";
import InfoSection from "./components/InfoSection/InfoSection";
import NavBar from "./components/Navbar";
import Produtos from "./components/Produtos/Produtos";
import Servicos from "./components/Servicos/Servicos";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <InfoSection />
      <Produtos />
      <Acessorios />
      <Servicos />
      <Sobre />
      <Contato />
    </div>
  );
}

export default App;
