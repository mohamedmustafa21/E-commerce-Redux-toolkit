import Footer from "./components/Global/Footer";
import Navbar from "./components/Global/Navbar";
import Home from "./pages/Home/Home";
import FilterCat from "./pages/AllCatigeory/AllCat";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from "./pages/FilterCategorys/Filter";
import SingleProducts from "./pages/SinglrProducts/SingleProducts";


function App() {


  const {products } = useSelector((state) => state.products)


  return (
    <>
     <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<FilterCat />} />
        <Route path="/electronics" element={<FilterCat />} />
        <Route path="/mobiles" element={<FilterCat />} />
        <Route path="/men" element={<FilterCat />} />
        <Route path="/women" element={<FilterCat />} />
        <Route path="/beautyHealth" element={<FilterCat />} />
        <Route path="/babyToys" element={<FilterCat />} />
        <Route path="/supermarket" element={<FilterCat />} />
        <Route path="/all/filter/:category" element={<Filter />} />
        <Route path="/filter/:category" element={<Filter />} />
        <Route path="/filter/:category/:id" element={<SingleProducts />} />
        <Route path="All/filter/:category/:id" element={<SingleProducts />} />

        <Route path="*" element={<FilterCat />} />
        
        </Routes>
      <Footer/>
     </Router>
    
    </>
  );
}

export default App;
