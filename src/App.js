import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

import PortugueseGym from './pages/gym/portuguese'
import EnglishGym from './pages/gym/english'
import MathGym from './pages/gym/math'
import PhysicsGym from './pages/gym/physics'
import ChemistryGym from './pages/gym/chemistry'
import BiologyGym from './pages/gym/biology'
import HistoryGym from './pages/gym/history'
import GeographyGym from './pages/gym/geography'
import PhilosophyGym from './pages/gym/philosophy'
import SociologyGym from './pages/gym/sociology'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/gym/portuguese' element={<PortugueseGym/>} />
        <Route path='/gym/english' element={<EnglishGym/>} />
        <Route path='/gym/math' element={<MathGym/>} />
        <Route path='/gym/physics' element={<PhysicsGym/>} />
        <Route path='/gym/chemistry' element={<ChemistryGym/>} />
        <Route path='/gym/biology' element={<BiologyGym/>} />
        <Route path='/gym/history' element={<HistoryGym/>} />
        <Route path='/gym/geography' element={<GeographyGym/>} />
        <Route path='/gym/philosophy' element={<PhilosophyGym/>} />
        <Route path='/gym/sociology' element={<SociologyGym/>} />
      </Routes>
    </Router>
  );
}

export default App;
