// import "./styles.scss"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a

const NewsCarousel = ({ generalNewsCarosel }) => {
  return (
    <div className="carousel container">
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        transitionTime="2000"
        interval="5000"
        showStatus=""
      >
        {generalNewsCarosel?.map((item) => {
          return (
            <div className="carosel">
              <div>
                <img src={item.urlToImage}></img>
              </div>
              <div>
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
