const navDemo = () =>{

    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);
    // const [isVisible, setIsVisible] = useState(true);
    // const [lastScrollTop, setLastScrollTop] = useState(0);
  
    // const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    // const toggleDoubleDropdown = () => setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    //     if (scrollTop > lastScrollTop) {
    //       // Scrolling down
    //       setIsVisible(false);
    //     } else {
    //       // Scrolling up
    //       setIsVisible(true);
    //     }
  
    //     setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
    //   return () => window.removeEventListener('scroll', handleScroll);
    // }, [lastScrollTop]);
  

    return(
        <nav class="flex items-center justify-between bg-white p-4">
        {/* <!-- Logo --> */}
        <div class="flex item-center justify-center flex-grow">
        <a href="#" className="flex items-center">
          <img
            src="/svg/logo-footer.svg"
            alt="logo"
            className="h-[64px] transition-transform duration-300 ease-in-out transform hover:scale-[120%]"
          />
        </a> 
        </div>

        {/* <!-- Menú --> */}
        <div class="flex-grow">
            <div class="grid grid-cols-6 gap-4 max-w-6xl mx-auto text-sm text-center text-slate-600">
            <a href="#link2" class="flex items-center justify-center relative mx-4 py-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#c4932c] after:w-full after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-semibold">Dermatología Láser</a>
                <a href="#link2" class="flex items-center justify-center relative mx-4 py-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#c4932c] after:w-full after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-semibold">Dermatología Estética</a>
                <a href="#link3" class="flex items-center justify-center relative mx-4 py-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#c4932c] after:w-full after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-semibold">Medicina Estética</a>
                <a href="#link4" class="flex items-center justify-center relative mx-4 py-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#c4932c] after:w-full after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-semibold">Dermatología Clínica</a>
                <a href="#link5" class="flex items-center justify-center relative mx-4 py-2  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#c4932c] after:w-full after:scale-x-0 after:transition-transform after:duration-200 after:origin-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-110 hover:font-semibold">Depilación Láser</a>
            </div>
        </div>
    </nav>
    )
}


export default navDemo;