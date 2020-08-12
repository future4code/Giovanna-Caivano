import React from 'react';
import './App.css';

import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import HobbyGrid from './components/HobbyGrid/HobbyGrid';

import GithubImg from '../src/img/Octocat.jpg'
import DecodeLogo from '../src/img/logo-decode2.png'
import BTGLogo from '../src/img/btgpactual-logo.png'
import MagnetisLogo from '../src/img/magnetis-logo.jpg'
import LabedinLogo from './img/labedin.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <img src={LabedinLogo} />
      </div>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Giovanna Dotto Caivano" 
          descricao="Oi, eu sou a Giovanna. Sou estudante da Labenu. Vivo a vida como toco violão. Eu não sei tocar violão..."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          image="https://cdn.icon-icons.com/icons2/510/PNG/512/email_icon-icons.com_50400.png"
          label="E-mail:"
          content=" giovannadottocaivano@gmail.com"
        />
        <CardPequeno
          image="https://cdn.icon-icons.com/icons2/1364/PNG/512/maplocalization_89142.png"
          label="Endereço:"
          content=" Rua Alves Guimarães, 150"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Estudando loucamente para fazer muitas páginas com React!" 
        />
        
        <CardGrande 
          imagem={DecodeLogo} 
          nome="Decode" 
          descricao="Trabalhando loucamente com projetos de tecnologia." 
        />

        <CardGrande 
          imagem={BTGLogo}
          nome="BTG Pactual" 
          descricao="Trabalhando loucamente na administração de fundos de investimento." 
        />

        <CardGrande 
          imagem={MagnetisLogo}
          nome="Magnetis" 
          descricao="Trabalhando loucamente na consultoria de investimentos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2015/02/espm-logo.jpg"
          nome="Escola Superior de Propaganda e Marketing"
          descricao="Relações Internacionais"
        />
      </div>

      
      <div className="page-section-container">
        <CardPequeno 
        label="Idiomas: "
        content="inglês fluente, espanhol intermediário, francês e alemão - leitura básica"
        />
        
        <CardPequeno 
        label="Linguagens: "
        content="HTML/CSS, JavaScript"
        />
      </div>

      <div className="page-section-container">
        <h2>Hobbies e Interesses</h2>
        <div className="grid-container">
          <HobbyGrid 
            name="Leitura"
          />
          <HobbyGrid 
            name="Mergulho"
          />
          <HobbyGrid 
            name="Jardinagem"
          />
          <HobbyGrid 
            name="Corrida"
          />
          <HobbyGrid 
            name="Séries"
          />
          <HobbyGrid 
            name="Cozinhar"
          />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          link="https://github.com/caivano"
          imagem={GithubImg} 
          texto="GitHub" 
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
