import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = () => setOpen(!open);
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-white shadow-lg w-full mx-auto flex items-center justify-center">
      <nav className="w-full flex justify-between items-center mx-auto max-w-[1240px] py-3 px-4 md:px-2">
        {/* desktop */}
        <div className="flex items-center w-full justify-between">
          {/* logo & menu  */}
          <div className="flex items-center justify-between md:w-auto w-full">
            {/* hamburger menu  */}
            <div className="md:hidden">
              <FaBars
                size={25}
                onClick={handleNav}
                className="cursor-pointer"
              />
            </div>
            {/* logo */}
            <div>
              <Link to="/">
                <h1
                  className={`text-3xl font-bold  uppercase ${
                    open ? "text-white" : "text-black"
                  }`}
                >
                  logo
                </h1>
              </Link>
            </div>
            {/* search */}
            <div className="md:hidden cursor-pointer">
              <FaSearch
                size={24}
                className={open ? "text-white hidden" : "text-black"}
              />
            </div>
          </div>
          {/* navigation  */}
          <div className="hidden items-center justify-center md:flex w-full">
            <ul className="flex justify-between gap-8 text-black text-[14px] items-center">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <Link to="/movies">
                  <a className="hover:underline underline-offset-8">Movies</a>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Contact
                </a>
              </li>
              <li>
                {user?.email ? (
                  <button
                    className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/signup">
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                      Sign Up
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          {/* icons */}
          <div className="md:flex hidden gap-6">
            <IoIosSearch size={20} className="cursor-pointer hover:scale-110" />
            <FiShoppingBag
              size={20}
              className="cursor-pointer hover:scale-110"
            />
            <CgProfile size={20} className="cursor-pointer hover:scale-110" />
          </div>
        </div>

        {/* mobile */}
        <div
          className={`fixed top-0 w-full h-full bg-gray-600 duration-300 ease-in-out  py-[20px] px-[30px] ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <nav className="flex flex-col items-center justify-center gap-8 relative w-full h-full">
            {/* close */}
            <div className="absolute right-2 top-0">
              <FaTimes
                size={25}
                onClick={handleNav}
                className="cursor-pointer"
              />
            </div>

            {/* navigation */}
            <div className="flex items-center justify-left mt-24">
              <ul className="flex flex-col justify-between gap-8 text-black text-[16px] font-medium items-center">
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    About
                  </a>
                </li>
                <li>
                  <Link to="/movies">
                    <a className="hover:underline underline-offset-8">Movies</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Contact
                  </a>
                </li>
                <li>
                  {user?.email ? (
                    <button
                      className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/signup">
                      <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                        Sign Up
                      </button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>

            {/* icons */}
            <div className="flex items-center gap-8 justify-center absolute bottom-0">
              <FaInstagram
                size={24}
                className="hover:scale-110 cursor-pointer"
              />
              <FaFacebook
                size={24}
                className="hover:scale-110 cursor-pointer"
              />
              <FaTwitter size={24} className="hover:scale-110 cursor-pointer" />
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
