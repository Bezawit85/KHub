import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import che from '../images/che.jpg';
import qena from '../images/qena.png';
import shega from '../images/shega.png';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Ventures.css";

function Ventures() {
  return (
    <div id='testimonials' className="testimonials">
    <Swiper
    
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 1,
        },
      }}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
    >
      <SwiperSlide className="bg-color1">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={che}
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Che</h1>
              <p className="paragraph mb-2">
              Mobility as a service providing for urban rural transport.
              provide booking and ticketing service for urban to rural transport.
              </p>
              <a href="https://kifiya.com/che/" className="btn btn-black align-self-md-start">
                Read More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-color2">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={qena}
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Qena</h1>
              <p className="paragraph mb-2">
              An AI-based loan technology. Qena enables 
             banks to provide nano, micro and small credit
             without need for collateral.
              </p>
              <a href="https://kifiya.com/qena/" className="btn btn-black align-self-md-start">
                Read More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="bg-color3">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid"
                src={shega}
                alt=""
              />
            </div>
            <div className="col-md-6 text-center text-md-left d-md-flex justify-content-md-center flex-md-column">
              <h1 className="h1">Shega</h1>
              <p className="paragraph mb-2">
              providing access to market to sellers
            and consumers with choice and variety
            of products from importers.
              </p>
              <a href="https://kifiya.com/shega/" className="btn btn-black align-self-md-start">
                Read More
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Ventures;