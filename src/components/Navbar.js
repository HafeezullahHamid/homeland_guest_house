import {
  FaHome,
  FaServicestack,
  FaHotel,
  FaCalendarCheck,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { useState, useCallback } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 bg-gray-100 bg-opacity-75">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`logo ${isOpen ? "hidden" : "block"}`}>
          <a href="/" aria-label="Homeland Guest House" className="text-xl font-bold text-gray-800">
            Homeland Guest House
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`md:hidden text-2xl text-gray-800 focus:outline-none ${isOpen ? "hidden" : "block"}`}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md p-4 absolute top-16 left-0 right-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mb-4 flex justify-between items-center">
            <a href="/" aria-label="Homeland Guest House" className="text-xl font-bold text-gray-800">
              Homeland Guest House
            </a>
            <button
              aria-label="Close menu"
              className="text-2xl text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li>
              <Link to="home" smooth={true} onClick={toggleMenu} className="hover:text-primary cursor-pointer flex items-center">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} onClick={toggleMenu} className="hover:text-primary cursor-pointer flex items-center">
                <FaServicestack className="mr-2" /> Services
              </Link>
            </li>
            <li>
              <Link to="rooms" smooth={true} onClick={toggleMenu} className="hover:text-primary cursor-pointer flex items-center">
                <FaHotel className="mr-2" /> Rooms
              </Link>
            </li>
            <li>
              <Link to="Booking" smooth={true} onClick={toggleMenu} className="hover:text-primary cursor-pointer flex items-center">
                <FaCalendarCheck className="mr-2" /> Booking
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} onClick={toggleMenu} className="hover:text-primary cursor-pointer flex items-center">
                <FaEnvelope className="mr-2" /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center space-x-8 text-gray-800">
          <li className="hover:cursor-pointer">
            <Link to="home" smooth={true} className="hover:text-primary flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="services" smooth={true} className="hover:text-primary flex items-center">
              <FaServicestack className="mr-1" /> Services
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="rooms" smooth={true} className="hover:text-primary flex items-center">
              <FaHotel className="mr-1" /> Rooms
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="Booking" smooth={true} className="hover:text-primary flex items-center">
              <FaCalendarCheck className="mr-1" /> Booking
            </Link>
          </li>
          <li className="hover:cursor-pointer">
            <Link to="contact" smooth={true} className="hover:text-primary flex items-center">
              <FaEnvelope className="mr-1" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
