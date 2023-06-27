import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bottom-0 left-0 top-0 flex w-fit flex-col gap-4 bg-gray-200 px-12">
      <Link to={"/"}>
        {" "}
        <h1
          style={{ fontFamily: "Poppins" }}
          className="pb-6 pt-8 text-lg font-semibold"
        >
          <span className="text-orange-500">Dev</span>challenges.io
        </h1>
      </Link>
      <ul
        className="flex flex-col gap-5 pt-8 font-semibold text-slate-500"
        id="navbar"
      >
        <NavLink
          to={"/colors"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li className="hover:text-slate-700">Colors</li>
        </NavLink>
        <NavLink
          to={"/typography"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li className="hover:text-slate-700">Typography</li>
        </NavLink>
        <NavLink
          to={"/spaces"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          <li className="hover:text-slate-700">Spaces</li>
        </NavLink>
        <NavLink
          to={"/buttons"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {" "}
          <li className="hover:text-slate-700">Buttons</li>
        </NavLink>
        <NavLink
          to={"/inputs"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li className="hover:text-slate-700">Inputs</li>
        </NavLink>
        <NavLink
          to={"/grid"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li className="hover:text-slate-700">Grid</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
