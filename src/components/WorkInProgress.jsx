import Footer from "./Footer";
import Navbar from "./Navbar";

const WorkInProgress = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex h-full">
        {" "}
        <Navbar />
        <div className="flex h-screen w-full flex-col content-end">
          <div className="flex flex-grow items-center justify-center">
            <h1 className="cursor-default text-xl">
              Work in progress! Come back later &#128517;
            </h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
