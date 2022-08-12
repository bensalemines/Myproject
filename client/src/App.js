import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Profile from './pages/Profile'
import Dashbord from 'C:/Users/HP/Desktop/CAMPING UNDER THE STARS/client/src/components/admin/summary-components/Dashboard.js'
import ProtectedRoutesAdmin from './pages/ProtectedRoutesAdmin'
import ProtectedRoutesUser from './pages/ProtectedRoutesUser'
import AboutUs from './pages/AboutUs';
import Products from './pages/Products'
import JoinUs from './pages/JoinUs'
import Details from './pages/Details';
import Booking from './pages/Booking';
import ShoppingCard from './pages/ShoppingCard'
import CheckoutSuccess from './pages/CheckoutSuccess'
import Summary from './components/admin/Summary';
// import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/JoinUs' element={<JoinUs/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/checkout-success' element={<CheckoutSuccess/>}/>
        <Route path='/ShoppingCard' element={<ShoppingCard/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Details/:_id' element={<Details/>}/>
        <Route path='/Summary' element={<Summary/>}/>
        {/* <Route path='/*' element={<NotFound/>}/> */}
        <Route element = {<ProtectedRoutesUser/>}>
        <Route path='/Profile' element={<Profile/>}/>
        </Route>
        <Route element = {<ProtectedRoutesAdmin/>}>
        <Route path = '/admin' element={<Dashbord/>}/>
        </Route>
        </Routes>
      </div>
   
  );
}

export default App;

