import React from "react";

const LocationInMap = ({ data }) => {
  return (
    <div className="st-google-map">
      {/* <iframe title='Google Map' src={data}></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.674401177946!2d79.90701037477496!3d23.18208081035789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1b2ecf74187%3A0xd82f5b96ec057cdd!2sDr%20Ashish%20Tiwari&#39;s%20LARI%20Heart%20Care%20Centre%20Jabalpur%20%7C%20Best%20Cardiologist%20in%20Jabalpur%20%7C%20Angioplasty%20%7C%20Angiography%20%7C%20Pacemaker!5e0!3m2!1sen!2sin!4v1714745561420!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationInMap;
