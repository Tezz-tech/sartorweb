// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About'
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import StartBusiness from './pages/StartBusiness';
import Navigation from "./common/navigation";
import Footer from "./common/footer";
import Consultation from './pages/Consultation';
import Login from './pages/sign-in';
import CreateBlog from './pages/CreateBlog';
import SingleBlog from './pages/SingleBlog';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/consultation' element={<Consultation/>}/>
                <Route path='/start-a-business' element={<StartBusiness/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/create-blog' element={<CreateBlog/>}/>
                <Route path='/blog/:id' element={<SingleBlog/>}/>
                
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
