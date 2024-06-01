import React from "react";
import DoctorProfile from "../../component/Specialists/DoctorProfile";
import Appointment from "../../component/Appointment/Appointment";
import Spacing from "../../component/Spacing/Spacing";

const doctorData = {
  img: `/images/member1.jpg`,
  name: `Dr. Ashish Tiwari`,
  designation: `Cardiologist`,
  desc: `M.S, M.Ch (Cardiolog Surgery)<br/>
  Medic General Medical Hospital<br/>
  Navi Mumbai, India`,
  special: [
    {
      title: `Speciality`,
      desc: `Paediatric, Laparoscopy`,
    },
    {
      title: `Experience`,
      desc: `22 Years+`,
    },
    {
      title: `Languages`,
      desc: `English, Hindi`,
    },
    {
      title: `Types Of`,
      desc: `Full Time Cardiologist`,
    },
  ],
  contactInfo: [
    {
      title: `Address`,
      desc: `Ekta Chowk, Vijay Nagar, Jabalpur.`,
    },
    {
      title: `Email`,
      desc: `drashishcardio@gmail.com`,
    },
    {
      title: `Phone`,
      desc: `+91-9893336443`,
    },
  ],
  shedule: [
    {
      day: `Monday`,
      hours: `8:00am–7:00pm`,
    },
    {
      day: `Tuesday`,
      hours: `11:00am–6:00pm`,
    },
    {
      day: `Wednesday`,
      hours: `11:00am–6:00pm`,
    },
    {
      day: `Thursday`,
      hours: `11:00am–6:00pm`,
    },
    {
      day: `Friday`,
      hours: `11:00am–6:00pm`,
    },
    {
      day: `Saturday`,
      hours: `11:00am–6:00pm`,
    },
    {
      day: `Sunday`,
      hours: `Off Day`,
    },
  ],
};

const DoctorProfilePage = () => {
  return (
    <>
      <Spacing lg={120} md={80} />
      <DoctorProfile data={doctorData} />
      <hr />
      <Appointment />
      <Spacing lg={120} md={80} />
    </>
  );
};

export default DoctorProfilePage;
