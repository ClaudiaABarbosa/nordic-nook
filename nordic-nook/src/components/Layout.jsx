import { NavLink, Outlet } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 16,
  textDecoration: "none",
  fontWeight: isActive ? "700" : "400",
});

export default function Layout() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Nordic Nook</h1>
        <nav>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle} end>
            About
          </NavLink>
        </nav>
      </header>

      <div style={{ marginTop: 24 }}>
        <Outlet />
      </div>

      <footer style={{ marginTop: 48, fontSize: 12, opacity: 0.7 }}>
        © {new Date().getFullYear()} Nordic Nook
      </footer>
    </main>
  );
}
