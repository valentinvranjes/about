import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar2.png";
import AVTR3 from "../../assets/avatar3.png";
import AVTR4 from "../../assets/avatar4.png";

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "BitcoinExpert Inc",
    review:
      "Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website!",
  },
  {
    avatar: AVTR2,
    name: "TradingPlaces Inc",
    review:
      "We have been very happy with our new website! It looks professional and very easy to navigate.",
  },
  {
    avatar: AVTR3,
    name: "BikiniStatistics Inc",
    review:
      "Valentin worked closely with us to provide a site that met all of the criteria that we were looking for. The end result was a website that is attractive, organized and effective.",
  },
  {
    avatar: AVTR4,
    name: "EduxLearning Inc",
    review:
      "Our new website is fun, exciting and easy to use for me and our audiences. Our website has transformed the image of our firm and is the key introductory point for new and potential clients.",
  },
];

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
         modules={[Navigation, Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
