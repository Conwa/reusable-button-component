const Navbar = () => {
  return (
    <div className="bottom-0 left-0 top-0 flex h-full w-fit flex-col gap-4 bg-gray-200 px-12">
      <h1
        style={{ fontFamily: "Poppins" }}
        className="pb-6 pt-8 text-lg font-semibold"
      >
        <span className="text-orange-500">Dev</span>challenges.io
      </h1>
      <ul className="flex flex-col gap-5 pt-8 font-semibold text-slate-500">
        {" "}
        <li>
          <a href="#">Colors</a>
        </li>
        <li>
          <a href="#">Typography</a>
        </li>
        <li>
          <a href="#">Spaces</a>
        </li>
        <li>
          <a href="#">Buttons</a>
        </li>
        <li>
          <a href="#">Inputs</a>
        </li>
        <li>
          <a href="#">Grid</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
