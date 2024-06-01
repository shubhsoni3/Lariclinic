import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeStyle4 from "./pages/Home/Home.jsx";
import DoctorProfilePage from "./pages/DoctorProfile/DoctorProfilePage.jsx";
// import PostDetails from "./pages/PostDetsail/PostDetails.jsx";
import PageNotFound from "./component/PageNotFound/PageNotFound.jsx";
import Layout from "./Layout/Layout.jsx";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeStyle4 />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        {/* <Route path="post/:postId" element={<PostDetails />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
