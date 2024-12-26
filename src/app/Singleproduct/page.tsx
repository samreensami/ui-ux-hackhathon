
import Link from "next/link";
import Asgaard from "../components/Asgaard";
import Discription from "../components/Discription";
import TopPicks from '../components/topPicks';
const SingleProduct = () => {
  return (
   
    <><div className="bg-gray-100">
      
      <div className="flex justify-left items-left pt-8">
        <Link href="/home" className="mx-2 text-black underline hover:text-gray-800">
          Home
        </Link>
        <span className="mx-1 text-black">{'>'}</span>
        <Link href="/shop" className="mx-2 text-black underline hover:text-gray-800">
          Shop
        </Link>
        <span className="mx-3 text-black">|</span>
        <span className='text-black'>SingleProduct</span>
      </div>
    
    <Asgaard />
    <Discription/>
    <TopPicks/>
    
    </div>
    </>
         
    

  );
};

export default SingleProduct;
