import React, { useEffect, useState } from 'react';
import HeaderComp from '../Components/HeaderComp';
import FreezerConfigComp from '../Components/FreezerConfig';
import { useParams } from 'react-router-dom';
import '../../../CSS/Config.css';

function Config() {
  const idCliente = 1;
  const { id } = useParams();
  const [qntFreezers, setQntFreezers] = useState(30);
  const numComponents = [];

  const catchAllFreezers = () => {
    for (let i = 1; i <= qntFreezers; i++) {
      numComponents.push(i);
    }
  }

  useEffect(() => catchAllFreezers(), []);

  return (
    <main className="homePage">
      <HeaderComp />
      <div className='cardConfigPage'>
        <div className='configTitle'>
          <h1>Página de Configuração</h1>
        </div>
        <div className="freezerPageConfig">
          {
            [...Array(qntFreezers)].map((_, index) => {
              if (Number(id) === 1) {
                if (index < (id * 15)) {
                  return <FreezerConfigComp clienteId={idCliente} freezerId={index + 1} key={index} />
                }
                return null;
              }
              if (index < (Number(id) * 15 - 15)) {
                return <FreezerConfigComp clienteId={idCliente} freezerId={id * 15 - 15 + (index + 1)} key={index} />
              }
              return null;
            })
          }
        </div>
      </div>
    </main>
  )
}

export default Config;
