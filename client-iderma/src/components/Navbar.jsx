import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDoubleDropdown = () => setIsDoubleDropdownOpen(!isDoubleDropdownOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav className={`flex flex-wrap bg-white border-gray-200 sticky top-0 transition-transform duration-300 ease-in-out z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-screen-xl flex-wrap items-center justify-between mx-auto p-4 text-sm">
        {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/svg/logo-footer.svg"
            alt="logo"
            className="h-[50px]"
          />
        </a> */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-multi-level"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-multi-level">
          <ul className="flex flex-wrap font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-[#c4932c] rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Dermatología Laser</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Dermatologìa Estética</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Medicina Estética</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Dermatología Clínica</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Depilación Laser</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Blog</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Transplante capilar Robótico</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Transplante capilar FUE</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Tratamientos Capilares</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Derma Shop</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-800 rounded font-normal hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;