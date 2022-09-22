
import './App.scss';
import  Yatebya  from './pages/Yatebya'
import  Moideti  from './pages/Moideti'
import  Perezvoni  from './pages/Perezvoni'
import  Vihodi  from './pages/Vihodi'
import  Layout  from './components/Layout'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>  
    <Routes>
      <Route path="/"  element={<Layout />} >
        <Route path="/" element={<Navigate replace to="/Yatebya" />} />
        <Route path="/Yatebya" element={<Yatebya />} />
        <Route path="/Moideti" element={<Moideti />} />
        <Route path="/Perezvoni" element={<Perezvoni />} />
        <Route path="/Vihodi" element={<Vihodi/>} />
        <Route path="*" element={<Navigate replace to="/Yatebya" />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
