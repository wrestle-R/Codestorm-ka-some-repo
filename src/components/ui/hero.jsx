"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState('#ffffff');
  const [backgroundColor, setBackgroundColor] = useState('#000000');

  // Preset color configurations
  const presetConfigs = [
    { name: 'Classic', textColor: '#ffffff', backgroundColor: '#000000' },
    { name: 'Ocean', textColor: '#e0f7ff', backgroundColor: '#0f172a' },
    { name: 'Sunset', textColor: '#fff7ed', backgroundColor: '#7c2d12' },
    { name: 'Forest', textColor: '#f0fdf4', backgroundColor: '#14532d' },
    { name: 'Purple', textColor: '#faf5ff', backgroundColor: '#581c87' },
    { name: 'Cyber', textColor: '#00ff41', backgroundColor: '#0d0208' },
    { name: 'Neon Pink', textColor: '#ff10f0', backgroundColor: '#1a0033' },
    { name: 'Gold Rush', textColor: '#ffd700', backgroundColor: '#2d1b00' }
  ];

  const applyPreset = (preset) => {
    setTextColor(preset.textColor);
    setBackgroundColor(preset.backgroundColor);
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: backgroundColor }}>
      {/* Gradient background with grain effect */}
      <div
        className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
        <div
          className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div
          className="h-[10rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div
          className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>
      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
          <div className="flex items-center">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black overflow-hidden">
              <img 
                src="/logo.png" 
                alt="CodeStorm Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <span className="ml-2 text-xl font-montserrat text-white">CodeStorm</span>
          </div>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              <NavItem label="Use Cases" hasDropdown />
              <NavItem label="Products" hasDropdown />
              <NavItem label="Resources" hasDropdown />
              <NavItem label="Pricing" />
            </div>
            <div className="flex items-center space-x-3">
              <button
                className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                Login
              </button>
            </div>
          </div> */}

          {/* Mobile menu button */}
          {/* <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button> */}
        </nav>

        {/* Mobile Navigation Menu with animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col p-4 bg-black/95 md:hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <span className="font-bold"></span>
                  </div>
                  <span className="ml-2 text-xl font-montserrat text-white">
                    CodeStorm
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="mt-8 flex flex-col space-y-6">
                <MobileNavItem label="Use Cases" />
                <MobileNavItem label="Products" />
                <MobileNavItem label="Resources" />
                <MobileNavItem label="Pricing" />
                <div className="pt-4">
                  <button className="w-full justify-start border border-gray-700 text-white">
                    Log in
                  </button>
                </div>
                <button
                  className="h-12 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                  Get Started For Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        {/* <div
          className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-white">
            Join the revolution today!
          </span>
          <ArrowRight className="h-4 w-4 text-white" />
        </div> */}

        {/* Hero section */}
        <div className="container mx-auto mt-12 px-4 text-center">
          
   <h1
  className="mx-auto max-w-4xl text-8xl font-bold leading-[0.8] font-montserrat text-white md:text-9xl lg:text-9xl"
  style={{ color: textColor }}>
  ESCAPE
</h1>
<h1
  className="mx-auto max-w-4xl text-8xl font-bold leading-[0.8] font-montserrat text-white md:text-9xl lg:text-9xl"
  style={{ color: textColor }}>
  ROOM
</h1>

          <div
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div
              className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20" />
          </div>

          {/* Color Picker Section */}
          <div className="mx-auto mt-16 mb-10 max-w-4xl px-4">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-6 text-center">
                Customize Colors
              </h3>
              
              {/* Color Controls */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <label className="block text-sm font-montserrat font-medium text-white">
                    Text Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => setTextColor(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="#ffffff"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="block text-sm font-montserrat font-medium text-white">
                    Background Color
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-12 rounded-lg border-2 border-white/20 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-montserrat text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="#000000"
                    />
                  </div>
                </div>
              </div>

              {/* Preset Configurations */}
              <div className="space-y-4">
                <h4 className="text-lg font-montserrat font-semibold text-white">
                  Preset Themes
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                  {presetConfigs.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => applyPreset(preset)}
                      className="group relative p-3 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105"
                      style={{ backgroundColor: preset.backgroundColor }}
                    >
                      <div 
                        className="w-full h-8 rounded-lg mb-2 flex items-center justify-center text-xs font-montserrat font-bold"
                        style={{ color: preset.textColor }}
                      >
                        Aa
                      </div>
                      <p className="text-xs font-montserrat text-white text-center truncate">
                        {preset.name}
                      </p>
                      
                      {/* Active indicator */}
                      {textColor === preset.textColor && backgroundColor === preset.backgroundColor && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => applyPreset(presetConfigs[0])} // Reset to Classic
                  className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white font-montserrat font-medium rounded-lg transition-all duration-200 border border-white/30 hover:border-white/50"
                >
                  Reset to Classic
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({
  label,
  hasDropdown
}) {
  return (
    <div className="flex items-center text-sm text-gray-300 hover:text-white">
      <span>{label}</span>
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1">
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </div>
  );
}

function MobileNavItem({
  label
}) {
  return (
    <div
      className="flex items-center justify-between border-b border-gray-800 pb-2 text-lg text-white">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </div>
  );
}

export { Hero2 };
