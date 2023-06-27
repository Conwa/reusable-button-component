import Footer from "../components/Footer";
import ImagePreviewComponent from "../components/ImagePreviewComponent";
import Navbar from "../components/Navbar";

import { Outlet, useLocation } from "react-router-dom";

const Homepage = () => {
  const pageUrls = [
    "http://localhost:5173/buttons",
    "http://localhost:5173/inputs",
  ];

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="max-w-screen flex h-full min-h-screen">
      {" "}
      <Navbar />
      <div className="flex h-full min-h-screen w-full flex-col content-end">
        {pathname === "/" ? <ImagePreviewComponent urls={pageUrls} /> : null}
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
