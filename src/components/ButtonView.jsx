import ButtonList from "./ButtonList";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ButtonView = () => {
  return (
    <div className="min-h-screen w-screen">
      <div className="flex h-full">
        {" "}
        <Navbar />
        <div className="flex h-full w-full flex-col">
          <ButtonList />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ButtonView;
