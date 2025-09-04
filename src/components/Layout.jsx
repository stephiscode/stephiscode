import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children, darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>{children}</main>
       <Footer darkMode={darkMode} />
    </div>
  );
}



export default Layout;