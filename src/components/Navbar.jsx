const Navbar = () => {
  return (
    <div className="bottom-0 left-0 top-0 flex min-h-screen w-fit flex-col gap-4 bg-gray-200 px-12">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="pb-6 pt-8 text-lg font-semibold"
      >
        <span className="text-orange-500">Dev</span>challenges.io
      </h1>
      <ul className="flex flex-col gap-5 pt-8 font-semibold text-slate-500">
        {" "}
        <li>
          <a href="#" className="hover:text-slate-700">
            Colors
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-700">
            Typography
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-700">
            Spaces
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-700">
            Buttons
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-700">
            Inputs
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-slate-700">
            Grid
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
