const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-0 z-10 h-full w-fit bg-gray-200 px-12">
      <h1
        style={{ fontFamily: "Poppins" }}
        className=" pb-6 pt-8 text-lg font-semibold"
      >
        <span className="text-orange-500">Dev</span>challenges.io
      </h1>
    </div>
  );
};

export default Navbar;
