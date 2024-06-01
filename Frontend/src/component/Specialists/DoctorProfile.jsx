import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

const DoctorProfile = ({ data }) => {
  const { img, name, designation, desc, special, contactInfo, shedule } = data;

  const [isActive, setIsActive] = useState("biography");

  return (
    <>
      <section className="st-shape-wrap">
        <div className="st-shape6">
          <img src="/shape/contact-shape3.svg" alt="shape3" />
        </div>
        <div className="st-height-b120 st-height-lg-b80" />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3">
              <div className="st-doctors-info-left">
                <div className="st-member st-style1 st-zoom">
                  <div className="st-member-img">
                    <img src={img} alt={img} className="st-zoom-in" />
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
                            <Icon icon="fa-brands:facebook-f" />
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
                            to="https://www.linkedin.com/in/dr-ashish-tiwari-cardiologist-jabalpur-916165226/"
                            target="_blank"
                          >
                            <Icon icon="fa-brands:linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://twitter.com/i/flow/login?redirect_after_login=%2FDrAshishCardio"
                            target="_blank"
                          >
                            <Icon icon="fa-brands:twitter" />
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
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-9">
              <div className="st-height-b25 st-height-lg-b25" />
              <div className="st-doctors-info-right">
                <div className="st-doctor-heading">
                  <h3 className="st-doctor-name">{parser(name)}</h3>
                  <div className="st-doctor-designation">
                    {parser(designation)}
                  </div>
                  <div className="st-doctor-desc">{parser(desc)}</div>
                </div>
                <div className="st-height-b20 st-height-lg-b20" />
                <ul className="st-doctors-special st-mp0">
                  {special.map((elements, index) => (
                    <li key={index}>
                      <b>{elements.title}:</b>
                      <span>{elements.desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="st-height-b30 st-height-lg-b30" />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="st-shedule-wrap st-style1">
                      <div className="st-shedule">
                        <h2 className="st-shedule-title">Contact info</h2>
                        <div className="st-height-b10 st-height-lg-b10" />
                        <ul className="st-footer-contact-list st-mp0">
                          {contactInfo.map((elements, index) => (
                            <li key={index}>
                              <span className="st-footer-contact-title">
                                {elements.title}:
                              </span>
                              {elements.desc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="st-height-b0 st-height-lg-b30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="st-shedule-wrap st-style2">
                      <div className="st-shedule">
                        <h2 className="st-shedule-title">Working hours</h2>
                        <ul className="st-shedule-list">
                          {shedule.map((elements, index) => (
                            <li key={index}>
                              <div className="st-shedule-left">
                                {elements.day}
                              </div>
                              <div className="st-shedule-right">
                                {elements.hours}{" "}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="st-height-b25 st-height-lg-b25" />
                <div className="st-tabs st-fade-tabs st-style2">
                  <ul className="st-tab-links st-style2 st-mp0">
                    <li
                      className={`st-tab-title ${
                        isActive === "biography" ? "active" : ""
                      }`}
                      onClick={() => setIsActive("biography")}
                    >
                      <span>Biography</span>
                    </li>
                    <li
                      className={`st-tab-title ${
                        isActive === "education" ? "active" : ""
                      }`}
                      onClick={() => setIsActive("education")}
                    >
                      <span>Education</span>
                    </li>
                  </ul>
                  <div className="st-height-b25 st-height-lg-b25" />
                  <div className="tab-content">
                    <div
                      id="Biography"
                      className={`st-tab ${
                        isActive === "biography" ? "active" : ""
                      }`}
                    >
                      <div className="st-doctor-details-box">
                        <p>
                          Dr. Ashish Tiwari, a leading figure in cardiology,
                          utilizes agile frameworks to deliver a comprehensive
                          overview of cardiovascular health. His iterative
                          approaches to patient care foster collaborative
                          thinking, enhancing the overall value proposition of
                          treatment strategies. Dr. Tiwari's commitment to
                          excellence organically grows the holistic world view
                          of cardiovascular care, integrating disruptive
                          innovations with a focus on workplace diversity and
                          patient empowerment.
                        </p>
                        <p>
                          "Dr. Ashish Tiwari, renowned in the field of
                          cardiology, focuses on seizing easily attainable
                          opportunities to introduce preliminary value-added
                          activities for beta testing. He aims to bridge the
                          digital gap by encouraging increased engagement
                          through clickthroughs. Dr. Tiwari's strategic approach
                          leverages accessible opportunities to pioneer
                          value-added initiatives in the realm of cardiology."
                        </p>
                        <p>
                          "Dr. Ashish Tiwari, a pioneer in cardiology,
                          emphasizes the integration of nanotechnology along the
                          path of medical advancement, ensuring a comprehensive
                          approach that goes beyond mere profitability. He is
                          committed to overcoming the digital gap by fostering
                          increased engagement through immersive information
                          pathways. Dr. Tiwari's vision encompasses leveraging
                          nanotechnology to revolutionize cardiology while
                          prioritizing inclusivity and accessibility in medical
                          information dissemination."
                        </p>
                      </div>
                    </div>
                    <div
                      id="Education"
                      className={`st-tab ${
                        isActive === "education" ? "active" : ""
                      }`}
                    >
                      <div className="st-doctor-details-box">
                        <ul>
                          <li>
                            PHD degree in Cardiology at University of Mediserv
                            (2006)
                          </li>
                          <li>
                            Master of Neoro Surgery at University of Mediserv
                            (2002)
                          </li>
                          <li>
                            MBBS degree in Neurosciences at University of
                            Mediserv (2002)
                          </li>
                          <li>
                            Higher Secondary Certificate at Mediserv collage
                            (1991)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .st-tabs */}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b120 st-height-lg-b80" />
      </section>
    </>
  );
};

export default DoctorProfile;
