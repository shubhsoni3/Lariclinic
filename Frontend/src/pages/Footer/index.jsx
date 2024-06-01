import React from "react";
import ContactInfoWidget from "../../component/FooterComponent/ContactInfoWidget";
import MenuWidget from "../../component/FooterComponent/MenuWidget";
import SocialWidget from "../../component/FooterComponent/SocialWidget";
import Newsletter from "../../component/FooterComponent/Newsletter";
import TextWidget from "../../component/FooterComponent/TextWidget";

import styled from "styled-components";

const menuDataOne = [
  { title: "Home", href: "home" },
  { title: "About Us", href: "about" },
  // /about
  { title: "Service", href: "department" },
  // /departments
  { title: "Doctors", href: "doctors" },
  // /doctors
  { title: "Gallery", href: "gallery" },
  // /Gallery
  { title: "Blog", href: "blog" },
  // /Blog
  { title: "Contact Us", href: "contact" },
  // /appointments
  { title: "Terms and Conditions", href: "/" },
];

const menuDataTwo = [
  { title: "ECG", href: "department" },
  // /blog
  { title: "HOLTER", href: "department" },
  // /contact
  { title: "ECHO", href: "department" },
  { title: "TMT", href: "department" },
  { title: "Angiography", href: "department" },
  { title: "Angioplasty", href: "department" },
  { title: "Pacemaker", href: "department" },
  { title: "Device Closure", href: "department" },
];

export default function Footer() {
  return (
    <Container>
      <footer className="cs_footer cs_style_1 cs_heading_color ">
        <div
          className="cs_footer_logo_wrap "
          style={{
            backgroundImage: "url(/images/footer_bg_1.svg)",
          }}
        >
          <div
            className="cs_footer_brand"
            style={{
              backgroundImage: "url(/images/footer_logo_bg.svg)",
            }}
          >
            <img
              src="/images/LariLogo1.png"
              alt="Logo Icon"
              className="cs_footer_brand_icon"
            />

            {/* <h2 className="cs_footer_brand_text">Lari Clinic</h2> */}
          </div>
        </div>
        <div className="cs_footer_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="cs_footer_item">
                  <TextWidget text="Lari Cardiology Clinic" />
                  <ContactInfoWidget />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cs_footer_item">
                  <h4>More</h4>

                  <MenuWidget data={menuDataOne} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cs_footer_item">
                  <h4>Quick Links</h4>
                  <MenuWidget data={menuDataTwo} />
                </div>
              </div>
              {/* <div className="col-lg-4">
                <div className="cs_footer_item">
                  <Newsletter
                    title="Be Our Subscribers"
                    subTitle="To get the latest news about health from our experts"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="cs_footer_bottom cs_accent_bg">
          <div className="container">
            <div className="cs_footer_bottom_in">
              <SocialWidget />
              <div className="cs_copyright">
                Copyright © 2024 DOAGuru Infosystems. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}

const Container = styled.div``;
