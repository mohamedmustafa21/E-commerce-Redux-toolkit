import Container from "../../components/Global/Container";
import Footer from "../../components/Global/Footer";
import CategoriesSlider from "../../components/Home/CategoriesSlider";
import FavBrands from "../../components/Home/FavBrands/FavBrands";
import Featured from "../../components/Home/Featured/Featured";
import FeaturesContainer from "../../components/Home/Features/FeaturesContainer";
import GridDeals from "../../components/Home/GridDeals";
import Hero from "../../components/Home/Hero";
import ShopCategory from "../../components/Home/ShopByCategory/ShopCategory";
import SkinCare from "../../components/Home/SkinCare/SkinCare";
import DealOfWeeks from './../../components/Home/DealOfWeek/DealOfWeeks';
import { useDispatch , useSelector} from "react-redux";
import { getData,singleProducts } from '../../store/api.slice';
import { useEffect,Fragment } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const {isLoading,products,error } = useSelector((state) => state.products)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getData())
  }, [dispatch])

  const getInfoId = (id) => {
    const selectedProduct = products.filter((item) => item.id === id);
    // console.log(selectedProduct);
}

  return (
    <>
    <Fragment>
      {error && (
        <div className="font-[cairo] bg-[red] h-[100vh] relative text-center text-[white] text-[30px]">
         <h1 className="absolute top-[50%]  text-center w-[100%]">حدث خطأ ما في السيرفر</h1> 
        </div>
      )}
       <Hero isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
      <Container>
        <CategoriesSlider isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
        <FeaturesContainer />
        <GridDeals />
        <Featured isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
        <SkinCare isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
        <ShopCategory isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
        <DealOfWeeks/>
        <FavBrands isLoading={isLoading} products={products} singleProducts={singleProducts} getInfoId={getInfoId}/>
      </Container>
    </Fragment>
     
    </>
  );
}
export default Home;
