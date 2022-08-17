import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Profile from './pages/Profile'
import Dashboard from './components/admin/Dashboard'
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
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import Events from './components/admin/Events';
import Product from './components/admin/Product';
import { useEffect } from 'react';
import { getUserData } from './slices/userSlices';
import { getTotals } from './slices/cardSlice';
import {useDispatch} from 'react-redux'

// import ProductList from './components/admin/ProductList';
// import CreateProduct from './components/admin/CreateProduct';
// import NotFound from './pages/NotFound'


function App() {
  const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getUserData());
  dispatch(getTotals())
})
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
        {/* <Route path='/*' element={<NotFound/>}/> */}
        <Route element = {<ProtectedRoutesUser/>}>
        <Route path='/Profile' element={<Profile/>}/>
        </Route>
        <Route element = {<ProtectedRoutesAdmin/>}>
        <Route path='/admin' element={<Dashboard/>}>
        <Route path="Users" element={<Users/>}/>
        <Route path="Orders" element={<Orders/>}/>
        <Route path="Events" element={<Events/>}/>
        <Route path="Product" element={<Product/>}/>
        <Route path="Summary" element={<Summary/>}/>
        </Route>
        </Route>
        </Routes>
      </div>
   
  );
}

export default App;

