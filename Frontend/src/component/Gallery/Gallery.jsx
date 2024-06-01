import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import ModalImage from "react-modal-image";
import Masonry from "react-masonry-css";

const categoryMenu = [
  // {
  //   title: "Cardiology",
  //   category: "cardiology",
  // },
  // {
  //   title: "cardiology",
  //   category: "cardiology",
  // },
  // {
  //   title: "cardiology",
  //   category: "cardiology",
  // },
  // {
  //   title: "cardiology",
  //   category: "cardiology",
  // },
  // {
  //   title: "cardiology",
  //   category: "cardiology",
  // },
];

const portfolioData = [
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg1.png",
    category: "cardiology",
    height: 299,
  },
  // {
  //   href: "/portfolio/portfolio-details",
  //   img: "/images/Galleryimg2.png",
  //   category: "cardiology",
  //   height: 299,
  // },
  // {
  //   href: "/portfolio/portfolio-details",
  //   img: "/images/Galleryimg3.png",
  //   category: "cardiology",
  //   height: 299,
  // },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg4.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg5.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg6.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg10.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg8.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg9.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg7.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg11.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg12.png",
    category: "cardiology",
    height: 299,
  },
  {
    href: "/portfolio/portfolio-details",
    img: "/images/Galleryimg13.png",
    category: "pulmonary",
    height: 299,
  },
  // {
  //   href: "/portfolio/portfolio-details",
  //   img: "/images/project7_lg.jpg",
  //   category: "pulmonary",
  //   height: 299,
  // },
  // {
  //   href: "/portfolio/portfolio-details",
  //   img: "/images/project1_lg.jpg",
  //   category: "pulmonary",
  //   height: 299,
  // },
];

const MasonryGallery = () => {
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(12);

  const breakPointColumns = {
    default: 3,
    1199: 2,
    767: 1,
  };

  return (
    <section id="gallery">
      <div className="st-height-b120 st-height-lg-b80" />
      <div className="container">
        <SectionHeading
          title="View our gallery"
          subTitle="Explore our cardiology gallery showcasing cutting-edge treatments, patient care, <br /> and advancements in cardiovascular health."
        />
      </div>
      <div className="container">
        <div className="st-portfolio-wrapper">
          <div className="st-isotop-filter st-style1 text-center">
            <ul className="st-mp0">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>Cardiology</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Masonry
            className="st-isotop st-style1 st-has-gutter st-lightgallery my-masonry-grid"
            breakpointCols={breakPointColumns}
          >
            {/* <div className="st-grid-sizer" /> */}
            {portfolioData.slice(0, itemShow).map((element, index) => (
              <div
                key={index}
                className={`st-isotop-item ${
                  active === "all"
                    ? ""
                    : !(active === element.category)
                    ? "d-none"
                    : ""
                }`}
              >
                <div className="st-project st-zoom st-lightbox-item st-link-hover-wrap">
                  <ModalImage
                    className="st-gallery-modal-initial-hidden"
                    small={element.img}
                    large={element.img}
                    alt={element.img}
                  />
                  <div className="st-project-img st-zoom-in">
                    <img
                      className="st-hover-hidden"
                      src={element.img}
                      alt={element.img}
                    />
                  </div>
                  <span className="st-link-hover">
                    <i>
                      <Icon icon="fa-solid:arrows-alt" />
                    </i>
                  </span>
                </div>
              </div>
            ))}
          </Masonry>
          <div className="text-center">
            {active === "all" ? (
              portfolioData.length <= itemShow ? (
                ""
              ) : (
                <>
                  <div className="st-height-b65 st-height-lg-b40" />
                  <span
                    className="st-btn st-style1 st-color1 st-size-medium st-flex-center st-gap-x-5"
                    onClick={() => setItemShow(itemShow + 4)}
                  >
                    <span>Load More</span>
                    <Icon icon="bi:arrow-right" />
                  </span>
                </>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="st-height-b120 st-height-lg-b80" />
    </section>
  );
};

export default MasonryGallery;
