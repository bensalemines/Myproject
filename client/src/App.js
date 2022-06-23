import {Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
// import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
