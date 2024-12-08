import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaCompass, FaFilm, FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav
        className={`w-full pb-2 md:pb-0 fixed h-16 bottom-0 px-12 md:px-0 md:static flex bg-darkmode-primary-bg md:bg-transparent overscroll-none`}
      >
        <ul className="w-full justify-between md:justify-start items-center space-x-4 flex">
          {["/", "/resources", "/profile"].map((path) => (
            <li key={path}>
              <NavLink
                to={path}
                className={`${
                  location.pathname === path ? "text-[#f5f5f5] underline underline-offset-4" : "text-zinc-400"
                }`}
              >
                <span className="hidden md:block">{path === "/" ? "Home" : path.slice(1).toUpperCase()}</span>
                <div className="md:hidden w-full flex justify-between items-center h-full text-2xl">
                  {path === "/" && <FaHome />}
                  {path === "/resources" && <FaCompass />}
                  {path === "/profile" && <FaUser />}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
