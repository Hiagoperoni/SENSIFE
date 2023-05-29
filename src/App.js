import '../src/CSS/App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './app/frontEnd/Pages/login';
import Home from './app/frontEnd/Pages/home';
import ZoomProd from './app/frontEnd/Pages/zoom';
import Config from './app/frontEnd/Pages/config';
import Painel from './app/frontEnd/Pages/painel';

function App() {

  return (
    <div className="App">
        <Routes>
            <Route exact path="/" element={ <Login /> } />
            <Route exact path="/home" element={ <Home /> } />
            <Route exact path="/planta/:id" element={ <Painel /> } />
            <Route exact path="/planta/:id/:prod" element={ <ZoomProd /> } />
            <Route exact path="/planta/:id/config" element={ <Config /> } />
        </Routes>
    </div>
  );
}

export default App;
