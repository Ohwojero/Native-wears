import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"; // <-- import your CSS file

const ImageList = [
  {
    id: 1,
    img: "/image/bag-1.jpg",
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: "/image/men-10.jpg",
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: "/image/r-w-1.jpg",
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Carousel= () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="hero-section ">
      <div className="hero-pattern"></div>
      <div className="container">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="container-wrapper">
                <div className="hero-text">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="hero-title"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="hero-description"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                    <button  className="hero-button">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="hero-image-wrapper">
                  <div data-aos="zoom-in" data-aos-once="true" className="image-container">
                    <img src={data.img} alt="" className="hero-image" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
