import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import alertaImg from '../Imagens/Alerta.png';
import { getFreezer } from '../services/request';

function FreezerComp(props) {
  let navigate = useNavigate();
  const { id } = useParams();
  const { clienteId, freezerId } = props;
  const [logFreezer, setLogFreezer] = useState({
    freezer_id: freezerId,
    temp_atual: 0,
    porta_status: "Fechada",
    Erro: 'none' 
  });

  const paginaProduto = () => {
    return navigate(`/planta/${id}/${freezerId}`)
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFreezer(clienteId, freezerId);
      const { freezer_id, temp_atual, porta_status, Erro } = data.data;
      setLogFreezer({
        freezer_id,
        temp_atual,
        porta_status,
        Erro, 
      });
    };
  
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  

  
  return (
    <section className="geralProd freezerProd" onClick={ paginaProduto }>
      <h3>Freezer {logFreezer.freezer_id}</h3>
      <div className="dataFreezer">
      <p>Temp: {logFreezer.temp_atual}Cº</p>
      <p>Porta {logFreezer.porta_status}</p>
      {
        logFreezer.Erro !== 'none' &&  (<img src={ alertaImg } alt="alerta" className="imgAlerta"/>)
      }
      </div>
    </section>
  )
}

export default FreezerComp;