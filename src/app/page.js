import AllProducts from "./components/home/AllProducts";
import PriceIncreasedProducts from "./components/home/PriceIncreasedProducts";
import TodaysMarketPrice from "./components/home/TodaysMarketPrice";


export default function Home() {
  return (
     <div>  
        
        <TodaysMarketPrice />
        <PriceIncreasedProducts />


        <AllProducts />
      
       </div> 
  );
}
