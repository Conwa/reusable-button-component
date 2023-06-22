import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen bg-green-300">
      <div className="flex h-full">
        {" "}
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
