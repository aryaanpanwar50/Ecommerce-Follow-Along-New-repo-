import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Homepage from './Pages/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import AddProduct from './Pages//AddProduct';
import EnterMethod from './Pages/EnterMethod';
import EcommerceLanding from './Pages/LandingPage';
import UpdatePage from './Pages/updateProduct';
<<<<<<< HEAD
import Cart from './Pages//Cart';
import ProfileDisplay from './Pages//Profile'
import AddressForm from './Pages/AddressForm';
=======
import Cart from './Pages/Order/Cart';
import ProfileDisplay from './Pages//Profile'
import AddressForm from './Pages/Address Form/AddressForm';
import SelectAddress from './Pages/Order/SelectAddress'
import AddressFormForCart from './Pages/Address Form/AddressFormForCart';
>>>>>>> 337212b (M23)

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/landingpage" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choice" element={<EnterMethod />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/landingpage" element={<EcommerceLanding/>}/>
          <Route path="/update/:id" element={<UpdatePage />} />
          <Route path="/home" element={
            <div>
              <Header />
              <Homepage />
              <Footer />
            </div>
          } />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart></Cart>}/>
          <Route path="/profile" element={<ProfileDisplay></ProfileDisplay>}/>
          <Route path="/add-address" element={<AddressForm />} />
<<<<<<< HEAD
=======
          <Route path='/add-address-cart' element={<AddressFormForCart/>}></Route>
          <Route path='/choose-address' element={<SelectAddress/>}></Route>
>>>>>>> 337212b (M23)
        </Routes>
      </Router>
    </div>
  );
}




