import '../src/CSS/App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';
import ZoomProd from './Pages/zoom';
import Config from './Pages/config';
import Painel from './Pages/painel';

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
