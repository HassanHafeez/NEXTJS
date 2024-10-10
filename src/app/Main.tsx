// import Navbar from "./Navbar";
import Banner from "./Banner";
import CategoryScroll from "./categoryScroll";
import Hero from "./Hero";
import Guide from "./StorySection";
import CardSwiper from "./Card";
import PictureSection from "./PictureSection";

export default function Main() {
  return (
  <>
  {/* <Navbar/> */}
<Hero/>
<CategoryScroll/>
<PictureSection/>
<Guide/>
<Banner/>
<CardSwiper/>
<section 
  className= 
      "max-container padding-content flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row border-2 border-red-500"
  
  ><h1> yaha pr aye ga kuch new </h1>
</section>

  </>
  );
}
