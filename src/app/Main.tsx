// import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryScroll from "./categoryScroll";
import Hero from "./Hero";
import Guide from "./StorySection";
import CardSwiper from "./Card";

import FeatureProduct from "./FeatureProduct";
import Footer from "./Footer";

export default function Main() {
  return (
  <>
  {/* <Navbar/> */}
<Hero/>
<CategoryScroll/>

<FeatureProduct/>

<Guide/>
<Footer/>

{/* <section 
  className= 
      "max-container padding-content flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"
  
  ><h1> yaha pr aye ga kuch new </h1>
</section> */}

  </>
  );
}
