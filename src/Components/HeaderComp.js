import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../CSS/Header.css';
import logoSensi from '../Imagens/LogoSENSI.png';

function HeaderComp() {
  const navigate = useNavigate();
  const goHome = () => {
    return navigate("/home");
  }

  const logout = () => {
    return navigate("/");
  }

  return (
    <header className='header'>
      <img src={logoSensi} alt='logo sensi' className='logoSensiHeader' />
      <button type="button" onClick={ goHome } className='headerButton'>Home</button>
      <button className='headerButton'>Suporte</button>
      <button type="button" onClick={ logout } className='headerButton'>Logout</button>
      <img src={logoSensi} alt='logo sensi' className='logoSensiHeader' />
    </header>
  )
}

export default HeaderComp;