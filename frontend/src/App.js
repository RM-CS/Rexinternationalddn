import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';
import Environmentfriendly from './pages/productspage/Environmentfriendly';
import Housekeeping from './pages/productspage/Housekeeping';
import Paperproduct from './pages/productspage/Paperproduct';
import BioSeptic from './pages/productspage/BioSeptic';
import Aqua from './pages/productspage/Aqua';
import Fatox from './pages/productspage/Fatox';
import Manura from './pages/productspage/Manura';
import Urix from './pages/productspage/Urix';
import { useEffect, useState } from 'react';
import SpinnerLoader from './components/spinnerLoader/SpinnerLoader';
import ContactPage from './pages/contactus/ContactPage';

function App() {
  const [data, setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },1000)
  },[])
 
  return (
    <>
   {
    data ? (
     
      <Router>
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<Aboutus />}/>
      <Route exact path='/contact' element={<ContactPage />}/>
      <Route exact path='/products/enviroment_friendly_green_chemicals' element={<Environmentfriendly />}/>
      <Route exact path='/products/housekeeping_and_sanitization_products' element={<Housekeeping />}/> 
      <Route exact path='/products/paper_products_and_dispensing_system' element={<Paperproduct />}/> 
      <Route exact path='/enzyme/bio-septic_for_septic_tank' element={<BioSeptic />}/> 
      <Route exact path='/enzyme/aqua' element={<Aqua />}/> 
      <Route exact path='/enzyme/manura' element={<Manura />}/> 
      <Route exact path='/enzyme/fatox-for_fat_and_oil_deposition' element={<Fatox />}/> 
      <Route exact path='/enzyme/urix-waterless_urinal_solution' element={<Urix />}/> 
    </Routes>
   </Router> 
   
    ):(
      <div>
        <SpinnerLoader />
      </div>
    )
   }
   </>
  
  );
}

export default App;
