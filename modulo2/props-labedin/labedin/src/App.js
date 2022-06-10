import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemDoug from './img/ImagemDoug.jpg';
import Setinha from './img/setinha.png';
import WebDev from './img/webdev.png';
import Contabilidade from './img/contabilidade.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Email from './img/email.png'
import Adress from './img/adress.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemDoug} 
          nome="Douglas Henrique" 
          descricao="Oi, eu sou o Douglas. Estou estudando web-development na Labenu. Adoro cinema e videogames!"
        />
        
        <ImagemButton 
          imagem={Setinha} 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={Email}
          conteudo="Email:⠀"
          email=" dougomegalul@gmail.com" 
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={Adress}
          conteudo="Endereço:⠀"
          email=" P. Sherman 42 Wallaby Way, Sydney" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={WebDev}
          nome="Web-development" 
          descricao="Algumas centenas de horas lidando com HTML, CSS e um pouquinho de Javascript." 
        />
        
        <CardGrande 
          imagem={Contabilidade} 
          nome="Contabilidade Oliveira" 
          descricao="Assistente de escritorio." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
