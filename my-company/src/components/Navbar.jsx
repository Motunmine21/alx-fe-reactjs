import { Link } from "react-router-dom";

export default function Navbar() {
  const navStyle = {
    padding: "1rem",
    backgroundColor: "#4CAF50",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
  };

  const linkStyle = {
    margin: "0 1rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}
