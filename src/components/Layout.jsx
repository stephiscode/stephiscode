import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div
      className={`min-h-screen selection:bg-[#2E5E4E] selection:text-white ${
        darkMode ? "bg-[#F7F4ED] text-[#0F172A]" : "bg-white text-[#0F172A]"
      }`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Layout;
