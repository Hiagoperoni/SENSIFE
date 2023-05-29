import React, { useState, useEffect } from 'react';
import HeaderComp from '../Components/HeaderComp';
import { useParams } from 'react-router-dom';
import { getFreezer, postStatusFreezer } from '../services/request';
import alertaImg from '../Imagens/Alerta.png'
import '../../../CSS/Zoom.css';

function ZoomProd(props) {
  const { prod } = useParams();
  const clienteId = 1;
  const [logFreezer, setLogFreezer] = useState({
    freezer_id: prod,
    temp_atual: 0,
    porta_status: "Fechada",
    Erro: 'none',
    createdAt: '',
  });

  const verProps = async () => {
    const data = {
      num_cliente: Number(clienteId), 
      freezer_id: Number(prod), 
      porta_status: logFreezer.porta_status, 
      temp_atual: Number(logFreezer.temp_atual),
    }
    const request = await postStatusFreezer(data);
    return request;
  }

  const consertarData = (dataString) => {
    const data = new Date(dataString);

    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear().toString();
    const hora = data.getHours().toString().padStart(2, "0");
    const minuto = data.getMinutes().toString().padStart(2, "0");
    const segundo = data.getSeconds().toString().padStart(2, "0");

    const dataFormatada = `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`;
    return dataFormatada;
  }


  useEffect(() => {
    const fetchData = async () => {
      const data = await getFreezer(clienteId, prod);
      const { freezer_id, temp_atual, porta_status, Erro, createdAt } = data.data;
      const novaData = consertarData(createdAt);
      setLogFreezer({
        freezer_id,
        temp_atual,
        porta_status,
        Erro,
        createdAt: novaData,
      });
    };

    
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="homePage">
      <HeaderComp />
      <div className='cardZoomFreezer'>
        <div className='zoomTitle'>
          <h1>Freezer {prod}</h1>
        </div>
        <div className="divZoomFreezer">
          <div className="cardStatusFreezer">
            <div className="zoomTitle">
              <h2>Status Atual</h2>
            </div>
            <div className='statusAtualDivZoom'>
              <div className='statusAtualItemZoom'>
                <h3>Temperatura Atual: {logFreezer.temp_atual}ºC</h3>
                {
                  logFreezer.Erro.includes('Temperatura') && (<img src={alertaImg} alt="alerta" className="imgAlertaZoom" />)
                }
              </div>
              <div className='statusAtualItemZoom'>
                <h3>Porta {logFreezer.porta_status}</h3>
                {
                  logFreezer.Erro.includes('Porta') && (<img src={alertaImg} alt="alerta" className="imgAlertaZoom" />)
                }
              </div>
            </div>
          </div>
          <div className="cardStatusFreezer">
            <div className="zoomTitle">
              <h2>Erros</h2>
            </div>
            <div className='divZoomErros'>
              <div className='statusErrosDiv'>
                <h3>Tipo do Erro:
                  {
                    logFreezer.Erro !== 'none' ? ` ${logFreezer.Erro}` : ' Nenhum'
                  }
                </h3>
                <h3>Horario:
                  {
                    logFreezer.Erro !== 'none' ? ` ${logFreezer.createdAt}` : ' Nenhum'
                  }
                </h3>
              </div>
              <button type="button" onClick={verProps} className='resetButton'>Resetar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ZoomProd;