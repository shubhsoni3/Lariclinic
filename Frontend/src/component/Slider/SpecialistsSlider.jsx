import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Slider from "react-slick";
import Specialists from "../Specialists/Specialists";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SpecialistsSlider = ({ data }) => {
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <div
  //     {...props}
  //     className={
  //       "slick-arrow-left slick-arrow" +
  //       (currentSlide === 0 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === 0 ? true : false}
  //   >
  //     <Icon icon="fa-solid:angle-left" />
  //   </div>
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  //   <div
  //     {...props}
  //     className={
  //       "slick-arrow-right slick-arrow" +
  //       (currentSlide === slideCount - 1 ? " slick-disabled" : "")
  //     }
  //     aria-hidden="true"
  //     aria-disabled={currentSlide === slideCount - 1 ? true : false}
  //   >
  //     <Icon icon="fa-solid:angle-right" />
  //   </div>
  // );

  const settings = {
    // dots: false,
    // infinite: true,
    // loop: true,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    responsive: [
      // {
      //   breakpoint: 1199,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
      // {
      //   breakpoint: 991,
      //   settings: {
      //     slidesToShow: 2,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section id="doctors">
      <div className="st-height-b120 st-height-lg-b80" />
      <SectionHeading
        title="Meet MR. Ashish Tiwari"
        subTitle="Dr. Ashish Tiwari, a dedicated physician, offers compassionate care,  specializing <br /> in Cardiologist, improving lives with expertise and empathy."
      />
      <div className="container">
        {/* <Slider {...settings} className="st-slider-style2">
          {<Specialists {...data[0]} />}
        </Slider> */}
        <div className="st-member st-style1 st-zoom col-lg-3 text-center">
          <div className="st-member-img">
            <img src={data[0].img} alt={data[0].img} className="st-zoom-in" />
            <Link className="st-doctor-link" to={data[0].authorLink}>
              <i>
                <Icon icon="fa6-solid:link" />
              </i>
            </Link>
            <div className="st-member-social-wrap">
              <img
                src="/shape/member-shape.svg"
                alt="shape"
                className="st-member-social-bg"
              />
              <ul className="st-member-social st-mp0">
                <li>
                  <Link
                    to="https://www.facebook.com/dr.ashishtiwaricardiologist"
                    target="_blank"
                  >
                    <Icon icon="fa6-brands:facebook-square" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/dr-ashish-tiwari-cardiologist-jabalpur-916165226/"
                    target="_blank"
                  >
                    <Icon icon="fa6-brands:linkedin" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.youtube.com/channel/UCwa9XKMRiM3xBR-GgzvY-7g"
                    target="_blank"
                  >
                    <Icon icon="fa-brands:youtube" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://twitter.com/i/flow/login?redirect_after_login=%2FDrAshishCardio"
                    target="_blank"
                  >
                    <Icon icon="fa6-brands:twitter-square" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/drashishcardiojbp/?igshid=Yzg5MTU1MDY%3D"
                    target="_blank"
                  >
                    <Icon icon="fa-brands:instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="st-member-meta">
            <div className="st-member-meta-in">
              <h3 className="st-member-name">{data[0].name}</h3>
              <div className="st-member-designation">{data[0].designation}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default SpecialistsSlider;
