import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          minHeight: "75vh",
          backgroundColor: "#FFFFFF",
          paddingBottom: "40px",
        }}
        className="max-md:w-full"
      >
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
