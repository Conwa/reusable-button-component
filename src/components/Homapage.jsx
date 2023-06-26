import Footer from "./Footer";
import ImagePreviewComponent from "./ImagePreviewComponent";
import Navbar from "./Navbar";

import React from "react";

const Homepage = () => {
  const pageUrls = ["http://localhost:5173/buttons"];
  return (
    <div className="min-h-screen w-screen">
      <div className="flex h-full">
        {" "}
        <Navbar />
        <div className="flex h-screen w-full flex-col content-end">
          <ImagePreviewComponent urls={pageUrls} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
