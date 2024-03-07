import styles from "./styles.css";
import imgOne from '../../images/gjr-img-02.jpg';
import videoOne from '../../videos/video-3.mp4';

export const FeaturedSection = () => {
  return (
    <div className="featured-section">
      <div className="featuredWrap">
        <div className="featured-card">
          <div className="image-box">
            <video autoPlay loop muted src={videoOne} type="video/mp4"></video>
      
            </div>
          <div className="text-box">
            <p>BEGIN YORU JOURNEY</p>
            <h1>Undergraduate Studies</h1>
            <p>
              Whether you want to change the world or nurture your own
              neighborhood, UWinnepeg is the place to begin. With more than 50
              programs to choose from, there's something for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
