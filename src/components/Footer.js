import { Link } from "react-scroll";
import {
  FaHome,
  FaServicestack,
  FaHotel,
  FaCalendarCheck,
  FaEnvelope,
} from "react-icons/fa";

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Homeland Guest House. All rights reserved.</p>
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li>
            <Link to="home" smooth={true} className="hover:text-primary">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} className="hover:text-primary">
              <FaServicestack />
              Services
            </Link>
          </li>

          <li>
            <Link to="rooms" smooth={true} className="hover:text-primary">
              <FaHotel />
              Rooms
            </Link>
          </li>

          <li>
            <Link to="Booking" smooth={true} className="hover:text-primary">
              <FaCalendarCheck />
              Booking
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} className="hover:text-primary">
              <FaEnvelope />
              ContactUs
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
