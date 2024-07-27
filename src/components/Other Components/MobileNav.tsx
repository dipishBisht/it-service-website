import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const bodyElement = document.querySelector("body");

    if (htmlElement && bodyElement) {
      if (isActive) {
        htmlElement.style.overflow = "hidden";
        bodyElement.style.overflow = "hidden";
        htmlElement.style.height = "100%";
        bodyElement.style.height = "100%";
      } else {
        htmlElement.style.overflow = "auto";
        bodyElement.style.overflow = "auto";
        htmlElement.style.height = "auto";
        bodyElement.style.height = "auto";
      }
    }
    return () => {
      if (htmlElement && bodyElement) {
        htmlElement.style.overflow = "auto";
        bodyElement.style.overflow = "auto";
        htmlElement.style.height = "auto";
        bodyElement.style.height = "auto";
      }
    };
  }, [isActive]);

  const handleMenuToggle = () => setIsActive(true);
  const handleCloseMenu = () => setIsActive(false);

  return (
    <div className="text-white z-[300] relative">
      <ul className="flex justify-between gap-4 fixed bottom-2 left-1/2 -translate-x-1/2 bg-black w-[95%] py-5 px-8 rounded-full text-sm">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <li onClick={handleMenuToggle}>Services</li>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <div
        className={`flex flex-col justify-center items-center gap-[70px] absolute duration-300 top-0 ${
          isActive ? "left-0 -translate-x-1/2" : "-left-full translate-x-1/2"
        } h-screen w-screen bg-black`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={handleCloseMenu}
        >
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2.5em"
            width="2.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </div>
        <Link to="/services/web" onClick={handleCloseMenu}>
          <h1>Web Development</h1>
        </Link>
        <Link to="/services/app" onClick={handleCloseMenu}>
          <h1>App Development</h1>
        </Link>
        <Link to="/services/game" onClick={handleCloseMenu}>
          <h1>Game Development</h1>
        </Link>
        <Link to="/services/graphic" onClick={handleCloseMenu}>
          <h1>Graphic Designing</h1>
        </Link>
        <Link to="/services/digital" onClick={handleCloseMenu}>
          <h1>Digital Marketing</h1>
        </Link>
      </div>
    </div>
  );
};
