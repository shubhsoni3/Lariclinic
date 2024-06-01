import React, { useEffect, useState } from "react";
import Preloader from "../component/Preloader/Preloader";
import Header from "../component/Header/index";
import Footer from "../pages/Footer/index";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const headerData = {
  logo: "../../public/images/LariLogo4.png",
};

const footerData = {
  logo: "/images/LariLogo4.png",
  bgImg: "/images/footer-bg.png",
  subTitle:
    " Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp incididunt ut labore. Lorem Ipsum is simply dummy.",
};
const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      <Container>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header
              logoSrc="/images/LariLogo.png"
              variant="cs_heading_color"
              data={headerData}
            />
            <Outlet />
            <div className="mt-lg-5">
              <Footer data={footerData} />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default Layout;

const Container = styled.div``;
