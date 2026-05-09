import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div
      className={`min-h-screen selection:bg-emerald-300 selection:text-zinc-950 ${
        darkMode ? "bg-zinc-950 text-white" : "bg-slate-50 text-slate-950"
      }`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default Layout;
