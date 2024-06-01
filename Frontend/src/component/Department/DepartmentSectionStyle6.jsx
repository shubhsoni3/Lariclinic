import React from "react";
import Spacing from "../../component/Spacing/index";
import IconBoxStyle12 from "../../component/Iconbox/IconBoxStyle12";
import SectionHeading from "../SectionHeading/SectionHeading";

export default function DepartmentSectionStyle6({
  sectionTitle,
  sectionTitleUp,
  data,
}) {
  return (
    <div className="container" id="department">
      <SectionHeading title={sectionTitle} titleUp={sectionTitleUp} center />
      <Spacing md="72" lg="50" />
      <div className="cs_iconbox_12_wrap">
        {data?.map((item, index) => (
          <div key={index}>
            <IconBoxStyle12 {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
