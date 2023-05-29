import React, { useEffect, useState } from 'react';
import HeaderComp from '../Components/HeaderComp';
import PlantaComp from '../Components/PlantaComp';
import '../../../CSS/Home.css';

function Home() {
  const qntFreezer = 30;
  const [qntPlantas, setQuantPlantas] = useState();

  const calcPlantas = () => {
    const divisao = (qntFreezer / 15);
    const arredondado = Math.floor(divisao);
    if (divisao > arredondado) {
      return setQuantPlantas(arredondado + 1);
    }
    return setQuantPlantas(arredondado);
  }

  useEffect(() => calcPlantas(), [])

  return (
    <main className="homePage">
      <HeaderComp />
      <div className='cardHomePage'>
        <div className='homeTitle'>
          <h1>Meus Produtos</h1>
        </div>
        <div className="dispHomePage">
          {
            [...Array(qntPlantas)].map((_, index) => (
              <PlantaComp key={index} id={index + 1} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Home;