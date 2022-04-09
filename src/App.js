
import './App.css';
import NavBar from './components/NavBar';
import Register from './components/Register';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import LogIn from './components/LogIn';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Employees' element={<Employees/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
