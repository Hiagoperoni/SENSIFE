import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../CSS/Home.css';

function PlantaComp(props) {
  const { id } = props;
  let navigate = useNavigate();

  const paginaProduto = () => {
    return navigate(`/planta/${id}`);
  }

  return (
      <section className="homePlantaComp" onClick={ paginaProduto }>
        <p>Planta {id}</p>
      </section>
  )
}

export default PlantaComp;