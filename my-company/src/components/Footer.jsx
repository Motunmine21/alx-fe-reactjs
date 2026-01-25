export default function Footer() {
  const footerStyle = {
    padding: "1rem",
    color: "#000",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100%",
    
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}
