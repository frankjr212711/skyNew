

import { FeaturedSection } from "../FeaturedSection";
import { Footer } from "../Footer";
import { Header } from "../Header/index";
import { Hero } from "../Hero/index";
import { IntroSection } from "../IntroSection";
import Styles from './Styles.css';

export const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Hero />
      <IntroSection/>
      <FeaturedSection/>
      <FeaturedSection/>
      {/* <FeaturedSection/> */}
      <Footer/>
      

    </div>
  );
};
