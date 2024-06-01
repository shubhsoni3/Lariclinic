import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function SocialWidget() {
  return (
    <div className="cs_social_links_wrap">
      <h2>Follow Us</h2>
      <div className="cs_social_links">
        <Link to="https://www.facebook.com/dr.ashishtiwaricardiologist">
          <Icon icon="fa-brands:facebook-f" />
        </Link>
        <Link to="https://www.youtube.com/channel/UCwa9XKMRiM3xBR-GgzvY-7g">
          <Icon icon="fa-brands:youtube" />
        </Link>
        <Link to="https://www.linkedin.com/in/dr-ashish-tiwari-cardiologist-jabalpur-916165226/">
          <Icon icon="fa-brands:linkedin-in" />
        </Link>
        <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FDrAshishCardio">
          <Icon icon="fa-brands:twitter" />
        </Link>
        <Link to="https://www.instagram.com/drashishcardiojbp/?igshid=Yzg5MTU1MDY%3D">
          <Icon icon="fa-brands:instagram" />
        </Link>
      </div>
    </div>
  );
}
