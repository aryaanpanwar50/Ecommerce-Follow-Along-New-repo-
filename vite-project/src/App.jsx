
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup'
import Homepage from './components/HomePage';
import Footer from './components/Footer';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import EnterMethod from './components/EnterMethod';
import EcommerceLanding from './components/LandingPage';
import UpdatePage from './components/updateProduct';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/landingpage" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/choice" element={<EnterMethod />} />
          <Route path="/signup" element={<SignUp/>} />
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
        </Routes>
      </Router>
    </div>
  );
}