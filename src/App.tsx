import logo from './logo.svg';
import './App.css';
import PresetPage from './pages/presetPage/PresetPage';
import { Routes, Route, Link } from 'react-router-dom';
import TimerPage from './pages/timerPage/TimerPage';

function App() {
  return (
    <div className="bg-yellow-100 min-h-screen">
      <Routes>
        <Route path='/' element={<PresetPage/>}></Route>
        <Route path='/timer' element={<TimerPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
