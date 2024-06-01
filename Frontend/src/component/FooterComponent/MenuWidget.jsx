import React from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function MenuWidget({ data }) {
  return (
    <ul className="cs_menu_widget cs_mp0">
      {data?.map((item, index) => (
        <li key={index}>
          {/* <Link to={item.href}>{item.title}</Link> */}
          <ScrollLink to={item.href} spy={true} duration={500}>
            {item.title}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}
