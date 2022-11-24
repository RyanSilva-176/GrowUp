import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import Accessibility from "./assets/Accessibility.png"
import Safe from "./assets/safe.svg"
import Support from "./assets/support.svg"

import Navbar from './components/Navbar';
import FlightForm from './components/FlightForm';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import InfoCard from './components/InfoCard';

import "./App.css"

function App() {
  return (
    <div className='root'>
      <header>
        <Navbar />
      </header>
      <main>
        <FlightForm />
        <Carousel />
        <Cards />
        <section className="information row">
          <InfoCard 
            image={Accessibility}
            title={'Programa Mais Acessibilidade'}
            alter="Personagens representando a população que necessita da Representatividade"
            text='Vivemos na sociedade da informação. Um dos fatores críticos para o sucesso
                nesta sociedade é o acesso e utilização das tecnologias de informação e comunicação.
                Estas tecnologias devem portanto estar disponíveis ao maior número possível de cidadãos
                evitando-se assim a exclusão social.'
          />
          <InfoCard 
            image={Safe}
            title={'Compra Segura'}
            alter="Personagem efetuando uma compra segura pela internet"
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique laudantium
                corrupti fuga sunt id excepturi laboriosam veniam unde dignissimos?'
          />
          <InfoCard 
            image={Support}
            title={'Suporte Remot'}
            alter="Personagem fazendo uso do suporte do conforto de seu lar"
            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse similique laudantium
                corrupti fuga sunt id excepturi laboriosam veniam unde dignissimos?'
          />
        </section>

      </main>
    </div>
  )
}

export default App
