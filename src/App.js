import './App.css';
import { Routes, Route} from 'react-router-dom'
import SignUpModal from './components/signUpModal/SignUpModal';
import SignInModal from './components/signInModal/SignInModal'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Recettes from './pages/recettes/Recettes';
import Private from './pages/Private/Private';
import PrivateHome from './pages/Private/PivateHome/PrivateHome'

function App() {
  return (
    <div>
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/recette' element={<Recettes />}/>
      <Route path='/private' element={<Private />}>
        <Route path="/private/private-home" element={<PrivateHome />} />
      </Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
