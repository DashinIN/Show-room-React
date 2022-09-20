
import './App.scss';
import  Yatebya  from './pages/Yatebya'
import  Moideti  from './pages/Moideti'
import  Perezvoni  from './pages/Perezvoni'
import  Vihodi  from './pages/Vihodi'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>  
    <Routes>
      <Route path="/" element={<Yatebya />} />
      <Route path="/Moideti" element={<Moideti />} />
      <Route path="/Perezvoni" element={<Perezvoni />} />
      <Route path="/Vihodi" element={<Vihodi/>} />
      <Route path="*" element={ <h1>error</h1> } />
    </Routes>
    </>
  );
}

export default App;
