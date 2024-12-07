import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="py-4 px-4 w-full h-fit flex">
      <ul className="flex space-x-4">
        {["/home", "/resources", "/profile"].map((path) => (
          <li key={path}>
            <NavLink
              to={path}
              className={`${
                location.pathname === path
                  ? "text-[#f5f5f5] underline underline-offset-4"
                  : "text-zinc-400"
              }`}
            >
              {path === "/" ? "Home" : path.slice(1).toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
