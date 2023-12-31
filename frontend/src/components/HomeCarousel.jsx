import Carousel from "react-multi-carousel";
import CarouselCard from "./CarouselCard";
import '../styles/Home.scss';
import "react-multi-carousel/lib/styles.css";

export default function HomeCarousel({ places, visit }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const carouselPlaces = places.map((place) => {
    return <CarouselCard spot={place} key={place.id} visit={visit} />;
  });

  return (
    <div className="home__carousel-wrapper">
      <Carousel
        swipeable={true}
        draggable={true}
        arrows={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        sliderClass='react-multi-carousel-track'
        className="home__carousel"
      >
        {carouselPlaces}
        {carouselPlaces.length === 0 && <p className='carousel__error'>No spots found</p>}
      </Carousel>
    </div>
  );

};

HomeCarousel.defaultProps = {
  visit: false
};