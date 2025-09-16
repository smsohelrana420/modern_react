import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
const [activeLink,setActiveLink]=useState("#home")
  const navLinks=[
    {href:"#home", label:"Home"},
    {href:"#about", label:"About"},
    {href:"#service", label:"Our Services"},
    {href:"#testimonials", label:"Testimonials"}
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-1">
          <div className="h-4 w-4 rounded-full bg-blue-600 opacity-75 transition-opacity hover:opacity-100"></div>
          <div className="h-4 w-4 -ml-2 rounded-full bg-red-600 opacity-100 transition-opacity hover:opacity-75"></div>
          
        </div>

        {/* Desktop navitems */}
           <div className="hidden md:flex items-center gap-10">
            {
              navLinks.map((link,index)=>(
               <a key={index} onClick={()=>setActiveLink(link.href)} href={link.href} className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink == link.href ? "text-blue-600 after:w-full":"text-gray-600 hover:text-gray-900"}`}>{link.label}</a>
              ))
            }
           </div>
        {/* get in touch btn */}

        {/* mobile menu */}
      </div>
    </nav>
  );
};

export default Navbar;
