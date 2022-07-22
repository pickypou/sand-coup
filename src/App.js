import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
    
     <Routes>
      <Route path='home' element={<Home />}/>
     </Routes>
     
    </div>
  );
}

export default App;
