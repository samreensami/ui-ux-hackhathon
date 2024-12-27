
import Contact from "./Contact/page";

import Main from "./Main/page";
import Shop from "./Shop/page";

import MyAccount from "./MyAccount/page";
import Checkout from "./Checkout/page";
import Blog from "./Blog/page";
import Cart from "./Cart/page";
import Singleproduct from "./Singleproduct/page";


export default function Home() {
  return (

    
    <div>
      
      
      
      <Main/>
      <Shop/>
      <Singleproduct/>
      <MyAccount/>
      <Checkout/>
      <Cart/>
      <Contact/>
      <Blog/>
      
    </div>
  );
}
