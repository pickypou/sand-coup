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
import SansSel from './pages/Private/privateRecettes/sans-sel/SansSel'
import SansLactose from './pages/Private/privateRecettes/sansLactose/SansLactose'
import Vegetarien from './pages/Private/privateRecettes/vegetarien/Vegetarien'
import Veganne from './pages/Private/privateRecettes/veganne/Veganne'



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
        <Route path="/private/private-recette-sans-sel" element={<SansSel />} />
        <Route path="/private/private-recette-sans-lactose" element={<SansLactose />} />
        <Route path="/private/private-recette-vegetarien" element={<Vegetarien />} />
        <Route path="/private/private-recette-veganne" element={<Veganne />} />
      </Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
