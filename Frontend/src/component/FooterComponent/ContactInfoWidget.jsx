import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ContactInfoWidget() {
  return (
    <ul className="cs_contact_widget">
      <li>
        <i className="cs_accent_bg">
          <Icon icon="ep:location" />
        </i>
        Ekta Chowk, MR-4 Rd, beside Bikaner Sweets, Vijay Nagar, Jabalpur,
        Madhya Pradesh 482001
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="fluent:call-24-regular" />
        </i>
        <Link to="tel:+919893336443">+919893336443</Link>
      </li>
      <li>
        <i className="cs_accent_bg">
          <Icon icon="bi:envelope" />
        </i>
        <Link to="mailto:drashishcardio@gmail.com">
          drashishcardio@gmail.com
        </Link>
      </li>
    </ul>
  );
}
