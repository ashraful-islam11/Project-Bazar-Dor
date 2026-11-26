import AllProducts from "./components/home/AllProducts";
import PriceDecreasedProducts from "./components/home/PriceDecreasedProducts";
import PriceIncreasedProducts from "./components/home/PriceIncreasedProducts";
import TodaysMarketPrice from "./components/home/TodaysMarketPrice";


export default function Home() {
  return (
     <div className = "bg-gray-200">  
        
        <TodaysMarketPrice />
        <PriceIncreasedProducts />
        <PriceDecreasedProducts /> 


        <AllProducts />
      
       </div> 
  );
}
