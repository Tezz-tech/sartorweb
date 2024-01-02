// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/sign-in';
import TopProfessionals from './pages/explore-top-professionals';
import BestSeller from './pages/explore-best-seller';
import Businesses from './pages/businesses';
import SignIn from './pages/sign-up';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/top-professtionals' element={<TopProfessionals/>}/>
                <Route path='/best-seller' element={<BestSeller/>}/>
                <Route path='/business' element={<Businesses/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
