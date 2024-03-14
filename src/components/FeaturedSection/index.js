import styles from "./styles.css";
import imgOne from '../../images/gjr-img-02.jpg';
import videoOne from '../../videos/video-5.mp4';

export const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <div className="featuredWrap">
        <div className="featured-card">
          
          <div className="image-box">
            <video autoPlay loop muted src={videoOne} type="video/mp4"></video>
      
            </div>
          <div className="text-box">
            <p>GET YOUR MODERN HOME</p>
            <h1>CONTEMPORY DESIGNS</h1>
            <p>
              Whether you want to change the world or nurture your own
              neighborhood, UWinnepeg is the place to begin. With more than 50
              programs to choose from, there's something for everyone.
            </p>

            <button className="featuredBtn">
              <a href="#">LEARN MORE</a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
