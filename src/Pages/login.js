import React, { useState } from 'react';
import '../../../CSS/Login.css';
import LogoSENSI from '../Imagens/LogoSENSI.png'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/request';

function Login() {
  const [loginUsuario, setLoginUsuario] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [erroLogin, setErroLogin] = useState();
  let navigate = useNavigate();

  const verifyUser = ({ target }) => {
    setLoginUsuario(target.value);
  }

  const verifyPassword = ({ target }) => {
    setPasswordUser(target.value);
  }

  const verifyLogin = async () => {
    try {
      const logged = await loginUser(loginUsuario, passwordUser);
      console.log(logged);
      return navigate('/home');
    } catch (e) {
      return setErroLogin('E-mail e/ou Senha inválido(s)!');
    }
  }

  return (

    <main className="loginPage">
      <div className='cardLogin'>
        <div className='topoLogin'>
          <img src={LogoSENSI} alt='Logo Sensi' className='logoSensi' />
        </div>
        <div className='inputsLoginDiv'>
          <input type="text" placeholder='E-mail' onChange={ verifyUser } className='input' />
          <input type="password" placeholder='Senha'onChange={ verifyPassword } className='input' />
          <button type="button" onClick={ verifyLogin } className='loginButton'>Entrar</button>
          {
            erroLogin && <p>{ erroLogin }</p>
          }
        </div>
        </div>
    </main>
  )
}

export default Login;