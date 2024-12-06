
// import Hero from '../Components/Hero'
// import Banner from '../Components/Banner' 
// import Categories from '../Components/Categories'
// import Whyus from '../Components/Whyus'
import Footer from '../Components/Footer';
// import Floating from '../Components/Floating';
// import RecentCampaign from '../Components/RecentCampaign';
// import AdvertisingCategories from '../Components/AdvertisingCategories';
// import Client from '../Components/Client';
import Faq from '../Components/Faq';
import Header from '../Components/Header';
import BannerNew from '../Components/BannerNew';
import Cards from '../Components/Cards'
import AdvertisingPartner from '../Components/AdvertisingPartner';
import ClientCarousel from '../Components/ClientCarousel';
import Card2 from '../Components/Card2';
import StudioCard from '../Components/StudioCard';
import TrendingCard from '../Components/TrendingCard';
const Home = () => {
  return (
  <>

      {/* <Hero /> */}

      {/* new  */}
      <Header/>
      <BannerNew/>
      <Cards/>
      <Card2 />
      <StudioCard />
      <TrendingCard />
      <AdvertisingPartner/>
      <ClientCarousel/>
      <Faq/>
      <Footer/>
      {/* <Floating /> */}
      {/* <Banner /> */}
      {/* <Categories /> */}
      {/* <Whyus /> */}
      {/* <RecentCampaign/> */}
      {/* <AdvertisingCategories/> */}
      {/* <Client/> */}
     


      </>
  )
}

export default Home