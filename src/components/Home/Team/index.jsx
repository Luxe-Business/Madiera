"use client";

import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import Farmer1 from "@/../public/assets/img/farmers/1.jpg";
import Farmer2 from "@/../public/assets/img/farmers/2.jpg";
import Farmer3 from "@/../public/assets/img/farmers/3.jpg";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const index = ({ className }) => {
  const settings = useMemo(() => {
    return {
      // Optional parameters
      loop: true,
      freeMode: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    };
  });

  return (
    <div
      className={
        "team-style-one-area default-padding-bottom pt-md-120" + " " + className
      }
    >
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-4">
            <h4 className="sub-title">Our Team</h4>
            <h2 className="title">Meet our professional Feed experts</h2>
            <a
              className="btn btn-theme secondary mt-10 btn-md radius animation"
              href="/en/contact"
            >
              Contact Us
            </a>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <Swiper {...settings} className="team-style-one-carousel swiper">
              {/* <!-- Additional required wrapper --> */}
              <div className="swiper-wrapper">
                {/* <!-- Single Item --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="farmer-style-one-item">
                    <div className="thumb">
                      <img src={Farmer1.src} alt="Image Not Found" />
                      <div className="social">
                        <i className="fas fa-share-alt"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="info">
                      {/* <span>Farmer of tomatoes</span> */}
                      <h4>
                        <a href="farmer-details.html">Aleesha Brown</a>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="farmer-style-one-item">
                    <div className="thumb">
                      <img src={Farmer2.src} alt="Image Not Found" />
                      <div className="social">
                        <i className="fas fa-share-alt"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="info">
                      {/* <span>Farmer of cherry</span> */}
                      <h4>
                        <a href="farmer-details.html">Kevin Martin</a>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- End Single Item --> */}
                {/* <!-- Single Item --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="farmer-style-one-item">
                    <div className="thumb">
                      <img src={Farmer3.src} alt="Image Not Found" />
                      <div className="social">
                        <i className="fas fa-share-alt"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="linkedin">
                            <a href="#">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="info">
                      {/* <span>Farmer of potato</span> */}
                      <h4>
                        <a href="farmer-details.html">Sarah Albert</a>
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <!-- End Single Item --> */}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
