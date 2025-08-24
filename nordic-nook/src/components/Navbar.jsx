import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors
     ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <nav className="flex items-center justify-between py-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Nordic Nook</h1>

      {/* Links */}
      <div className="flex space-x-4">
        <NavLink to="/" className={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/about" className={linkStyle}>
          About
        </NavLink>
      </div>
    </nav>
  );
}
