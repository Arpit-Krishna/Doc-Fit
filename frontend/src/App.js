import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import bg from "./components/assets/background.svg"
import Create from "./components/Create";
import DocMap from "./components/DocMap";
// import PSignin from "./components/PSignin";
import Access from "./components/Access";

function App() {
  return (
    <div className="App relative h-screen">
      <div className='relative w-full h-screen'>
        <img src={bg} alt='background' className='w-full h-full -z-10 object-cover'/>
      </div>
      <div className='w-full absolute z-10 top-0 left-0 h-full'>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/create" element={<Create/>}/>
            <Route path='/map' element={<DocMap/>}/>
            <Route path='/patient-signup' element={<Login/>}/>
            <Route path='/access' element={<Access/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
