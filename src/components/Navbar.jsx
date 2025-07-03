import { useTheme } from "../context/ThemeContext";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const linkInactive = "text-gray-300 hover:text-white hover:bg-blue-500";
  const linkActive = "text-white bg-blue-700";

  return (
    <nav className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-white font-bold text-xl">MyApp</span>
        </div>
        <div className="flex space-x-4 items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            About
          </NavLink>
          <button
            onClick={toggleTheme}
            className="ml-4 text-white px-3 py-1 bg-gray-700 rounded hover:bg-gray-800"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
