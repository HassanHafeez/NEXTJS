// import Navbar from "./Navbar";
import CategoryScroll from "./categoryScroll";
import Hero from "./Hero";
import Guide from "./StorySection";
export default function Main() {
  return (
  <>
  {/* <Navbar/> */}
  <Hero/>
  <CategoryScroll/>


  
<section 
  className= 
      "max-container padding-content flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"
  
  ><h1>Hello World</h1>
</section>

<Guide/>

<section 
  className= 
      "max-container padding-content flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"
  
  ><h1>Hello World</h1>
</section>

  </>
  );
}
