import Footer from "./Footer";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex h-full">
        {" "}
        <Navbar />
        <div className="flex h-screen w-full flex-col content-end">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
