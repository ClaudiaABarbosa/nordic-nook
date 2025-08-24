import { NavLink, Outlet } from "react-router-dom";
import "tailwindcss";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <main className="max-w-4xl mx-auto px-4">
      <Navbar />
      <div className="mt-6">
        <Outlet />
      </div>

      <footer className="mt-12 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nordic Nook
      </footer>
    </main>
  );
}
