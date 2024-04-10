import Routers from "../routers/Routers";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="w-full items-center justify-center h-screen">
      <Navbar />
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
