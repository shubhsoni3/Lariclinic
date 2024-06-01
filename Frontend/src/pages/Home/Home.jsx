import React from "react";
import Hero from "../../component/Hero/HeroStyle4";
import LocationInMap from "../../component/Map/LocationInMap";
import Contact from "../../component/Contact/Contact";
import Appointment from "../../component/Appointment/Appointment";
import About from "../../component/About/About";
import Iconbox from "../../component/Iconbox/Iconbox";
import PostWrapper from "../../component/Post/PostWrapper";
import SpecialistsSlider from "../../component/Slider/SpecialistsSlider";
import TestimonialSlider from "../../component/Slider/TestimonialSlider";
import BrandSlider from "../../component/Slider/BrandSlider";
import { FaHeartbeat } from "react-icons/fa";
// import Newsletter from "../Components/Newsletter/Newsletter";
// import Accordion from "../Components/Accordion/Accordion";
// import PriceSlider from "../Components/Slider/PriceSlider";
// import Funfact from "../Components/Funfact/Funfact";
// import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import MasonryGallery from "../../component/Gallery/Gallery";
import HomeStyle4 from "./HomeStyle4";
import DepartmentSectionStyle6 from "../../component/Department/DepartmentSectionStyle6";

// const heroData = {
//   bgImg: "images/hero-bg15.jpg",
//   bgShape: "shape/hero-shape.png",
//   sliderImages: [
//     // {
//     //   img: "/images/hero-bg15.jpg",
//     // },
//     // {
//     //   img: "images/hero-img1.png",
//     // },
//     // {
//     //   img: "images/hero-img2.png",
//     // },
//     // {
//     //   img: "images/hero-img.png",
//     // },
//     {
//       img: "images/hero-img1.png",
//     },
//     // {
//     //   img: "images/hero-img2.png",
//     // },
//   ],
//   title: ["Cardiology", "Cardiology", "Cardiology", "Cardiology", "Cardiology"],
// };

const iconboxData = [
  {
    bg: "purple",
    icon: "icons/icon1.svg",
    title: "Qualified Doctors",
    subTitle:
      "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
  },
  {
    bg: "green",
    icon: "icons/icon2.svg",
    title: "24 Hours Service",
    subTitle:
      "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
  },
  {
    bg: "red",
    icon: "icons/icon3.svg",
    title: "Need Emergency",
    subTitle:
      "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
  },
];

const aboutData = {
  title:
    "Lari Cardiology Clinic is a specialized healthcare facility dedicated to providing patient treatment with focused expertise in cardiology.",
  subTitle:
    "At Lari Cardiology Clinic, we are dedicated to your heart's health above all else. Our clinic specializes in providing advanced treatments and compassionate care tailored to your individual needs, ensuring optimal cardiovascular well-being. Led by expert cardiologists and supported by a committed staff, we offer a comprehensive range of services, from cutting-edge diagnostics to innovative treatment options. With a focus on personalized attention and evidence-based practices, we strive to deliver the highest standard of cardiac care to every patient. Whether you require preventive measures, intervention, or ongoing management, our clinic is here to support you on your journey to a healthier heart and a better quality of life.",

  avater: {
    img: "images/member1.jpg",
    name: "Dr. Ashish Tiwari",
    designation: "Founder & Director",
  },
  timeTable: [
    {
      day: "Monday",
      startTime: "Open 24 Hours",
    },
    {
      day: "Tuesday",
      startTime: "Open 24 Hours",
      // startTime: "9:00",
      // endTime: "6:00",
    },
    {
      day: "Wednesday",
      startTime: "Open 24 Hours",
    },
    {
      day: "Thursday",
      startTime: "Open 24 Hours",
    },
    {
      day: "Friday",
      startTime: "Open 24 Hours",
    },
    {
      day: "Saturday",
      startTime: "Open 24 Hours",
    },
    {
      day: "Sunday",
      startTime: "Open 24 Hours",
    },
  ],
  contact: "(+91) - 9893336443",
};

const specialistData = [
  {
    img: "images/member1.jpg",
    name: "Dr. Ashish Tiwari",
    designation: "Cardiologist",
    authorLink: "/doctor-profile",
  },
  // {
  //   img: "images/member2.jpg",
  //   name: "Dr. Vera Hasson",
  //   designation: "Cardiology",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member3.jpg",
  //   name: "Dr. Matthew Hill",
  //   designation: "Neurosurgery",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member4.jpg",
  //   name: "Dr. Jeanette Hoff",
  //   designation: "Surgery",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member1.jpg",
  //   name: "Dr. Philip Bailey",
  //   designation: "Urology",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member2.jpg",
  //   name: "Dr. Vera Hasson",
  //   designation: "Cardiology",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member3.jpg",
  //   name: "Dr. Matthew Hill",
  //   designation: "Neurosurgery",
  //   authorLink: "/doctor-profile",
  // },
  // {
  //   img: "images/member4.jpg",
  //   name: "Dr. Jeanette Hoff",
  //   designation: "Surgery",
  //   authorLink: "/doctor-profile",
  // },
];

// const beforeAfterData = {
//   bgImg: "/images/before-after-bg.jpg",
//   beforeImg: "/images/after.jpg",
//   afterImg: "images/before.jpg",
// };

const testimonialData = [
  {
    // img: "images/avatar2.png",
    name: "Jitendra pandey",
    // designation: "Executive",
    subTitle:
      "Dr ashish tiwari sir one of the best cardiologist in jabalpur Thank you sir for your support to me.",
  },
  {
    // img: "images/avatar3.png",
    name: "Shiv Narayan",
    // designation: "Biographer",
    subTitle:
      "The doctors and nurses on your medical team work hard to ensure all patients feel like they are essential. Thank you for being so considerate and caring.🙏❤️🙏",
  },
  {
    // img: "images/avatar4.png",
    name: "Nihal Parashar",
    // designation: "UX Designer",
    subTitle:
      "I visited here for general check up, Dr Ashish Tiwari is really humble person he listened to me very patiently and gave me inputs regarding my health which helped me gain good health",
  },
  {
    // img: "images/avatar2.png",
    name: "Khusi Rajput",
    // designation: "Executive",
    subTitle:
      "Best cardiologist in Jabalpur.... He treats like a our family members...I respect you sir 😊",
  },
  {
    // img: "images/avatar3.png",
    name: "Rachna Mishra",
    subTitle:
      "Best cardiologist practicing in Jabalpur. My mother is taking treatment from Dr Ashish... He describes the things so well.. and he is really humble.",
  },
  {
    // img: "images/avatar4.png",
    name: "Pappu Chouksey",
    subTitle:
      "The doctor's behavior was good, even the fish of the doctor sahib and Anna's checkup also kept the fish very low. Why do we people in the film think that the fee rates for every thing should be reduced for the sake of the public?",
  },
];

// const priceData = [
//   {
//     title: "Blood Test",
//     price: "39",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "0",
//       },
//       {
//         title: "Fifth Description",
//         status: "0",
//       },
//     ],
//   },
//   {
//     title: "Hemoglobin Test",
//     price: "89",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "1",
//       },
//       {
//         title: "Fifth Description",
//         status: "0",
//       },
//     ],
//   },
//   {
//     title: "Homocysteine Test",
//     price: "150",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "1",
//       },
//       {
//         title: "Fifth Description",
//         status: "1",
//       },
//     ],
//   },
//   {
//     title: "Blood Test",
//     price: "39",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "0",
//       },
//       {
//         title: "Fifth Description",
//         status: "0",
//       },
//     ],
//   },
//   {
//     title: "Hemoglobin Test",
//     price: "89",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "1",
//       },
//       {
//         title: "Fifth Description",
//         status: "0",
//       },
//     ],
//   },
//   {
//     title: "Homocysteine Test",
//     price: "150",
//     featureList: [
//       {
//         title: "First Description",
//         status: "1",
//       },
//       {
//         title: "Second Description",
//         status: "1",
//       },
//       {
//         title: "Third Description",
//         status: "1",
//       },
//       {
//         title: "Fourth Description",
//         status: "1",
//       },
//       {
//         title: "Fifth Description",
//         status: "1",
//       },
//     ],
//   },
// ];

// const faqData = {
//   title: "Just Answer the Questions",
//   img: "images/faq-img.png",
//   bgImg: "shape/faq-bg.svg",
//   faqItems: [
//     {
//       title: "What is Medi solution?",
//       content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     },
//     {
//       title: "How do I get a refill on my prescription?",
//       content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     },
//     {
//       title: "How competent our total treatment?",
//       content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     },
//     {
//       title: "If I get sick what should I do?",
//       content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     },
//     {
//       title: "What is emergency cary to your hospital?",
//       content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
//     },
//   ],
// };

// const newsletterData = {
//   bgImg: "images/news-letter-bg.png",
//   contact: "(+01) - 234 567 890",
// };

const postData = [
  {
    img: "images/blog1.jpg",
    videoUrl: "https://www.youtube.com/embed/9yNMMmL6Nys?si=4XzgvmsS_UiY8OQz",
    title:
      "Dil kee dhadakan ka achaanak badhna. agar dil kee dhadakan achaanak badh jae to kya karen?",
    date: "OCt, 2023",
    author: " Dr.Ashish Tiwari",
    authorLink: " ",
    postLink: "https://www.youtube.com/embed/9yNMMmL6Nys?si=4XzgvmsS_UiY8OQz",
  },
  {
    img: "images/blog2.jpg",
    videoUrl: "https://www.youtube.com/embed/e55MXRlnjr0?si=Kyx_mLENjpTO24Yd",
    title:
      "Distinguishing Atrial Fibrillation from Regular Health Rhythm | Unveiling the Contrasts",
    date: "Feb, 2024",
    author: " Dr.Ashish Tiwari",
    authorLink: "",
    postLink: "https://www.youtube.com/embed/e55MXRlnjr0?si=Kyx_mLENjpTO24Yd",
  },
  {
    img: "images/blog3.jpg",
    videoUrl: "https://www.youtube.com/embed/TAoyHt6uYgw?si=kpQYblrvR-cdj6m3",
    title: "Aapako apana Cardiac check kab karavaana chaahie?",
    date: "Nov, 2023",
    author: " Dr.Ashish Tiwari",
    authorLink: "",
    postLink: "https://www.youtube.com/embed/TAoyHt6uYgw?si=kpQYblrvR-cdj6m3",
  },
  {
    img: "images/blog3.jpg",
    videoUrl: "https://www.youtube.com/embed/z4mbnJeXJbk?si=3kALj5ieq9PmUj0c",
    title: "Child’s first hospital visit",
    date: "OCt, 2023",
    author: " Dr.Ashish Tiwari",
    authorLink: "",

    postLink: "https://www.youtube.com/embed/z4mbnJeXJbk?si=3kALj5ieq9PmUj0c",
  },
];
const departmentData = [
  {
    title: "ECG",
    subTitle:
      "Maximize cardiac health through our integrated cardiac rehabilitation initiative, tailored for optimal ECG performance.",
    iconUrl: "/images/home_2/heart_-removebg-preview.png",
    // iconUrl: <FaHeartbeat />,
    href: "/departments/department-details",
  },
  {
    title: "HOLTER",
    subTitle:
      "Continuous surveillance and ongoing follow-up care guarantee peak heart health, specifically optimized for Holter monitoring in cardiology",
    iconUrl: "/images/home_2/holter-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "ECHO",
    subTitle:
      "Targeting risk factors to enhance heart health and overall well-being, specifically optimized for echocardiography in cardiology.",
    iconUrl: "/images/home_2/echo-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "TMT",
    subTitle:
      "Initiate proactive interventions to uphold cardiac health via preventive care, specifically tailored for TMT (Treadmill Test) in cardiology.",
    iconUrl: "/images/home_2/Tmt-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "Angiography",
    subTitle:
      "Comprehensive treatment regimen for enhanced cardiac health, specifically optimized for angiography in cardiology.",
    iconUrl: "/images/home_2/Angiography-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "Angioplasty",
    subTitle:
      "Thorough diagnostic evaluation for precise assessment and personalized cardiology intervention, tailored specifically for angioplasty.",
    iconUrl: "/images/home_2/Dna-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "Pacemaker",
    subTitle:
      "Comprehensive diagnostic assessment to ensure accurate evaluation and personalized cardiology intervention, customized specifically for pacemaker placement.",
    iconUrl: "/images/home_2/Pacemaker-removebg-preview.png",
    href: "/departments/department-details",
  },
  {
    title: "Device Closure",
    subTitle:
      "Extensive diagnostic assessment for precise evaluation and personalized cardiology intervention, customized specifically for device closure procedures.",
    iconUrl: "/images/home_2/Device-removebg-preview.png",
    href: "/departments/department-details",
  },
];

// const brandData = [
//   {
//     bg: "orange",
//     img: "images/client1.png",
//   },
//   {
//     bg: "blue",
//     img: "images/client2.png",
//   },
//   {
//     bg: "red",
//     img: "images/client3.png",
//   },
//   {
//     bg: "green",
//     img: "images/client4.png",
//   },
//   {
//     bg: "dip-blue",
//     img: "images/client5.png",
//   },
//   {
//     bg: "orange",
//     img: "images/client1.png",
//   },
//   {
//     bg: "blue",
//     img: "images/client2.png",
//   },
//   {
//     bg: "red",
//     img: "images/client3.png",
//   },
//   {
//     bg: "green",
//     img: "images/client4.png",
//   },
//   {
//     bg: "dip-blue",
//     img: "images/client5.png",
//   },
// ];

const mapLocationURL = "";

const Home = () => {
  return (
    <>
      {/* <Hero data={heroData} /> */}
      <HomeStyle4 />
      {/* <Iconbox data={iconboxData} /> */}
      <About data={aboutData} />

      <section topMd={190} topXl={105} id="departments" className="mt-lg-5">
        <DepartmentSectionStyle6
          sectionTitle="Discover Your Ideal Service"
          sectionTitleUp="DEPARTMENTS"
          data={departmentData}
        />
      </section>
      <Appointment />
      <SpecialistsSlider data={specialistData} />
      <hr />
      <MasonryGallery />

      {/* <BeforeAfter data={beforeAfterData} /> */}

      {/* ********Using This Again ********** */}
      <TestimonialSlider data={testimonialData} />

      {/* <Funfact /> */}
      {/* <PriceSlider data={priceData} /> */}
      {/* <Accordion data={faqData} /> */}
      {/* <Newsletter data={newsletterData} /> */}

      {/* ********Using This Again ********** */}
      <PostWrapper data={postData} />
      {/* <BrandSlider data={brandData} /> */}
      <Contact />
      <LocationInMap data={mapLocationURL} />
    </>
  );
};

export default Home;
