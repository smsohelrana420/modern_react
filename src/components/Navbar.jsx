import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-blue-600 opacity-75 transition-opacity hover:opacity-100"></div>
          <div className="h-4 w-4 -ml-2 rounded-full bg-red-600 opacity-100 transition-opacity hover:opacity-75"></div>
        </div>

        {/* Desktop navitems */}

        {/* get in touch btn */}

        {/* mobile menu */}
      </div>
    </nav>
  );
};

export default Navbar;
