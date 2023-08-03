"use client";

import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="flex gap-2 justify-center">
        <li>
          <Link to="" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
