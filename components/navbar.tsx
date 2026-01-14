"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-1 bg-[#FFFDF5] md:px-16 sticky top-0 z-50 shadow-sm min-h-[65px]">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <Image 
          src="/logo-lif.png" 
          alt="LIF Logo" 
          width={800} 
          height={200} 
          className="w-[150px] md:w-[230px] h-auto object-contain" 
          priority
          quality={100}
        />
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button 
        className="md:hidden text-[#9F2D00] p-2" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Navigasi Links */}
      <ul className={`
        absolute md:static top-full left-0 w-full md:w-auto bg-[#FFFDF5] md:bg-transparent p-6 md:p-0 transition-all duration-300
        flex flex-col md:flex-row gap-6 md:gap-8 items-center font-bold text-[13px] md:text-[14px] text-[#9F2D00] tracking-wide
        ${isOpen ? "flex shadow-md" : "hidden md:flex"}
      `}>
        {/* Link About */}
        <li className="hover:text-[#FE8900] uppercase transition-colors cursor-pointer">
          <a href="#about" onClick={() => setIsOpen(false)}>About LIF</a>
        </li>
        
        {/* Link Upcoming Event */}
        <li className="hover:text-[#FE8900] uppercase transition-colors cursor-pointer whitespace-nowrap">
          <a href="#events" onClick={() => setIsOpen(false)}>Upcoming Event</a>
        </li>
        
        {/* Link Galleries */}
        <li className="hover:text-[#FE8900] uppercase transition-colors cursor-pointer">
          <a href="#galleries" onClick={() => setIsOpen(false)}>Galleries</a>
        </li>
        
        {/* Link Local Partnership */}
        <li className="hover:text-[#FE8900] uppercase transition-colors cursor-pointer whitespace-nowrap">
          <a href="#partnership" onClick={() => setIsOpen(false)}>Local Partnership</a>
        </li>
      </ul>
    </nav>
  );
}