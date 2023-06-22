import ButtonList from "./components/ButtonList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
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
}

export default App;
