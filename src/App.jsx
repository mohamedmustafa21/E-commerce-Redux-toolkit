import Footer from "./components/Global/Footer";
import Navbar from "./components/Global/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import FilterCat from "./pages/AllCatigeory/AllCat";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from "./pages/FilterCategorys/Filter";
import SingleProducts from "./pages/SinglrProducts/SingleProducts";
import NotFound from "./pages/Not Found/NotFound";
import Login from "./pages/Login/Login";
import Rigester from "./pages/Rigister/Rigester";
import PrivatePages from "./pages/PrivatePages/PrivatePages.jsx"
import { ToastContainer } from "react-toastify";


function App() {


  
  return (
    <>
     <Router>
     <ToastContainer/>
        <Navbar />
        <Routes>
          <Route element={<PrivatePages/>} >
           
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/:category" element={<FilterCat />} />
        <Route path="/" element={<Home />} />
        <Route path="/all/filter/:category" element={<Filter />} />
        <Route path="/filter/:category" element={<Filter />} />
        <Route path="/:category/filter/:category" element={<Filter />} />
        <Route path="/:category/filter/:category/:id" element={<SingleProducts />} />
        <Route path="/filter/:category/:id" element={<SingleProducts />} />
        <Route path="All/filter/:category/:id" element={<SingleProducts />} />  
        </Route> 
        <Route path="/Rigister" element={<Rigester />} />
        <Route path="/login" element={<Login />} />

     
        </Routes>
      
      <Footer/>
     </Router>
    
    </>
  );
}

export default App;
