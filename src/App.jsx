import "./App.css";
import Acessorios from "./components/Acessorios/Acessorios";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import InfoSection from "./components/InfoSection/InfoSection";
import NavBar from "./components/Navbar";
import Produtos from "./components/Produtos/Produtos";
import Servicos from "./components/Servicos/Servicos";
import Sobre from "./components/Sobre/Sobre";
import img from "./images/whatsapp-icon.png"
import notification from './videos/notification-sound.mp3'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function App() {
  return (
    <div className="App">
      <FloatingWhatsApp
       phoneNumber="+5581995011503"
       accountName="Manuserv" 
       avatar={img} 
       statusMessage="Geralmente responde em 24h" 
       chatMessage={`Olá! 🤝\nComo podemos te ajudar?`} 
       placeholder="Digite um texto..."
       notification={true}
       notificationDelay={30}
       notificationSound={true}
       notificationSoundSrc={notification}
      />
      {/* <button id="whats"> <img src={img} alt="WhatsApp Icon" /></button> */}
      <NavBar />
      <Home />
      <InfoSection />
      <Produtos />
      <Acessorios />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
