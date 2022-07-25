import './App.css';
import { Routes, Route} from 'react-router-dom'
import SignUpModal from './components/signUpModal/SignUpModal';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Recettes from './pages/recettes/Recettes';

function App() {
  return (
    <div>
      <SignUpModal />
      <Navbar />
      <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/recette' element={<Recettes />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
