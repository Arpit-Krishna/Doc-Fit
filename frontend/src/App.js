import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Landingpage from './components/LandingPage'
import bg from './components/assets/background.svg'
import Login from './components/Login';
import Signup from "./components/Signup";
import Form from "./components/Form";
function App() {
  return (
    <div className="App relative h-screen">
      <div className='relative w-full h-screen'>
        <img src={bg} alt='background' className='w-full h-full -z-10 object-cover' />
      </div>
      <div className='w-full absolute z-10 top-0 left-0 h-full'>
        <Router>
          <Routes>
            <Route path='/' element={<Landingpage />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="form" element={<Form />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
