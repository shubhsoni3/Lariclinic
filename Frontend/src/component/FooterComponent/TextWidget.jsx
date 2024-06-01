import React from "react";
import parse from "html-react-parser";

export default function TextWidget({ logoUrl, text }) {
  return (
    <div className="cs_text_widget">
      {logoUrl && <img src={logoUrl} alt="Logo" />}
      {text && <h2 className="cs_newsletter_title">{parse(text)}</h2>}
    </div>
  );
}
