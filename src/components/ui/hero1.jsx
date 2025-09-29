"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TestimonialsSectionDemo } from "@/components/ui/testimonials-with-marquee";

const Hero2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [presetModalOpen, setPresetModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
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
    { name: 'Gold Rush', textColor: '#ffd700', backgroundColor: '#2d1b00' },
    // New presets
    { name: 'Arctic', textColor: '#f0f9ff', backgroundColor: '#0c4a6e' },
    { name: 'Crimson', textColor: '#fef2f2', backgroundColor: '#7f1d1d' },
    { name: 'Emerald', textColor: '#ecfdf5', backgroundColor: '#064e3b' },
    { name: 'Amethyst', textColor: '#fdf4ff', backgroundColor: '#701a75' },
    { name: 'Steel', textColor: '#f8fafc', backgroundColor: '#334155' },
    { name: 'Copper', textColor: '#fff7ed', backgroundColor: '#9a3412' },
    { name: 'Sapphire', textColor: '#eff6ff', backgroundColor: '#1e3a8a' },
    { name: 'Rose Gold', textColor: '#fef7f0', backgroundColor: '#a16207' },
    { name: 'Mint', textColor: '#f0fdfa', backgroundColor: '#0f766e' },
    { name: 'Lavender', textColor: '#faf5ff', backgroundColor: '#7c3aed' },
    { name: 'Charcoal', textColor: '#f1f5f9', backgroundColor: '#1e293b' },
    { name: 'Coral', textColor: '#fff1f2', backgroundColor: '#be123c' },
    { name: 'Jade', textColor: '#ecfccb', backgroundColor: '#365314' },
    { name: 'Indigo', textColor: '#eef2ff', backgroundColor: '#3730a3' },
    { name: 'Tangerine', textColor: '#ffedd5', backgroundColor: '#c2410c' },
    { name: 'Teal', textColor: '#f0fdfa', backgroundColor: '#134e4a' },
    { name: 'Magenta', textColor: '#fdf2f8', backgroundColor: '#be185d' },
    { name: 'Olive', textColor: '#f7fee7', backgroundColor: '#365314' },
    { name: 'Navy', textColor: '#f1f5f9', backgroundColor: '#0f172a' },
    { name: 'Maroon', textColor: '#fef2f2', backgroundColor: '#881337' },
    { name: 'Turquoise', textColor: '#ecfeff', backgroundColor: '#155e63' },
    { name: 'Plum', textColor: '#faf5ff', backgroundColor: '#6b21a8' },
    { name: 'Bronze', textColor: '#fefce8', backgroundColor: '#92400e' },
    { name: 'Slate', textColor: '#f8fafc', backgroundColor: '#475569' },
    { name: 'Crimson Red', textColor: '#ffebee', backgroundColor: '#b71c1c' },
    { name: 'Deep Blue', textColor: '#e3f2fd', backgroundColor: '#0d47a1' },
    { name: 'Forest Green', textColor: '#e8f5e8', backgroundColor: '#1b5e20' },
    { name: 'Royal Purple', textColor: '#f3e5f5', backgroundColor: '#4a148c' },
    { name: 'Golden Yellow', textColor: '#fffde7', backgroundColor: '#f57f17' },
    { name: 'Dark Orange', textColor: '#fff3e0', backgroundColor: '#e65100' },
    { name: 'Deep Teal', textColor: '#e0f2f1', backgroundColor: '#004d40' },
    { name: 'Hot Pink', textColor: '#fce4ec', backgroundColor: '#ad1457' },
    { name: 'Lime Green', textColor: '#f9ffe6', backgroundColor: '#33691e' },
    { name: 'Electric Blue', textColor: '#e1f5fe', backgroundColor: '#0277bd' },
    { name: 'Sunset Orange', textColor: '#fff8e1', backgroundColor: '#ef6c00' },
    { name: 'Midnight Blue', textColor: '#e8eaf6', backgroundColor: '#1a237e' },
    { name: 'Cherry Red', textColor: '#ffebee', backgroundColor: '#c62828' },
    { name: 'Emerald Green', textColor: '#e0f2e1', backgroundColor: '#2e7d32' },
    { name: 'Violet', textColor: '#ede7f6', backgroundColor: '#512da8' },
    { name: 'Amber', textColor: '#fff8e1', backgroundColor: '#ff8f00' },
    { name: 'Deep Purple', textColor: '#f3e5f5', backgroundColor: '#673ab7' },
    { name: 'Dark Cyan', textColor: '#e0f7fa', backgroundColor: '#00838f' },
    { name: 'Burgundy', textColor: '#f3e5f5', backgroundColor: '#880e4f' },
    { name: 'Neon Green', textColor: '#39ff14', backgroundColor: '#001100' },
    { name: 'Electric Purple', textColor: '#bf00ff', backgroundColor: '#1a0029' },
    { name: 'Neon Blue', textColor: '#00bfff', backgroundColor: '#001133' },
    { name: 'Neon Orange', textColor: '#ff4500', backgroundColor: '#330a00' },
    { name: 'Neon Yellow', textColor: '#ffff00', backgroundColor: '#333300' },
    { name: 'Neon Red', textColor: '#ff073a', backgroundColor: '#330007' },
    { name: 'Neon Cyan', textColor: '#00ffff', backgroundColor: '#003333' },
    { name: 'Neon Magenta', textColor: '#ff00ff', backgroundColor: '#330033' },
    { name: 'Matrix Green', textColor: '#00ff00', backgroundColor: '#001100' },
    { name: 'Terminal Green', textColor: '#33ff33', backgroundColor: '#0a0a0a' },
    { name: 'Retro Pink', textColor: '#ff69b4', backgroundColor: '#2d1b35' },
    { name: 'Synthwave', textColor: '#ff00ff', backgroundColor: '#0f0f23' },
    { name: 'Vaporwave', textColor: '#ff71ce', backgroundColor: '#01cdfe' },
    { name: 'Miami Vice', textColor: '#ff006e', backgroundColor: '#8338ec' },
    { name: 'Cyberpunk', textColor: '#ffff00', backgroundColor: '#ff00ff' },
    { name: 'Outrun', textColor: '#ff073a', backgroundColor: '#39ff14' },
    { name: 'Blade Runner', textColor: '#00ffff', backgroundColor: '#ff4500' },
    { name: 'Tron', textColor: '#00bfff', backgroundColor: '#191970' },
    { name: 'Pastel Pink', textColor: '#8b5cf6', backgroundColor: '#fce7f3' },
    { name: 'Pastel Blue', textColor: '#3b82f6', backgroundColor: '#dbeafe' },
    { name: 'Pastel Green', textColor: '#10b981', backgroundColor: '#d1fae5' },
    { name: 'Pastel Yellow', textColor: '#f59e0b', backgroundColor: '#fef3c7' },
    { name: 'Pastel Purple', textColor: '#8b5cf6', backgroundColor: '#e9d5ff' },
    { name: 'Pastel Orange', textColor: '#f97316', backgroundColor: '#fed7aa' },
    { name: 'Soft Mint', textColor: '#059669', backgroundColor: '#ecfdf5' },
    { name: 'Baby Blue', textColor: '#0ea5e9', backgroundColor: '#f0f9ff' },
    { name: 'Peach', textColor: '#ea580c', backgroundColor: '#fff7ed' },
    { name: 'Lilac', textColor: '#7c3aed', backgroundColor: '#f5f3ff' },
    { name: 'Cream', textColor: '#92400e', backgroundColor: '#fffbeb' },
    { name: 'Seafoam', textColor: '#047857', backgroundColor: '#f0fdfa' },
    { name: 'Mars Red', textColor: '#ffffff', backgroundColor: '#cd5c5c' },
    { name: 'Jupiter Orange', textColor: '#000000', backgroundColor: '#ff8c00' },
    { name: 'Saturn Gold', textColor: '#000000', backgroundColor: '#ffd700' },
    { name: 'Neptune Blue', textColor: '#ffffff', backgroundColor: '#4682b4' },
    { name: 'Venus Yellow', textColor: '#000000', backgroundColor: '#ffff99' },
    { name: 'Mercury Silver', textColor: '#000000', backgroundColor: '#c0c0c0' },
    { name: 'Pluto Black', textColor: '#ffffff', backgroundColor: '#2f4f4f' },
    { name: 'Galaxy Purple', textColor: '#ffffff', backgroundColor: '#483d8b' },
    { name: 'Nebula Pink', textColor: '#ffffff', backgroundColor: '#db7093' },
    { name: 'Cosmic Blue', textColor: '#ffffff', backgroundColor: '#191970' },
    { name: 'Solar Flare', textColor: '#000000', backgroundColor: '#ff6347' },
    { name: 'Starlight', textColor: '#000000', backgroundColor: '#f5f5dc' },
    { name: 'Victorian Red', textColor: '#fdf2f8', backgroundColor: '#7f1d1d' },
    { name: 'Victorian Blue', textColor: '#eff6ff', backgroundColor: '#1e3a8a' },
    { name: 'Victorian Green', textColor: '#f0fdf4', backgroundColor: '#14532d' },
    { name: 'Victorian Purple', textColor: '#faf5ff', backgroundColor: '#581c87' },
    { name: 'Victorian Gold', textColor: '#fffbeb', backgroundColor: '#92400e' },
    { name: 'Art Deco', textColor: '#ffd700', backgroundColor: '#000000' },
    { name: 'Vintage Rose', textColor: '#fff1f2', backgroundColor: '#be123c' },
    { name: 'Antique Brass', textColor: '#fffbeb', backgroundColor: '#a16207' },
    { name: 'Old Money', textColor: '#f8fafc', backgroundColor: '#1e293b' },
    { name: 'Sepia', textColor: '#a0522d', backgroundColor: '#fdf6e3' },
    { name: 'Retro Orange', textColor: '#ffedd5', backgroundColor: '#ea580c' },
    { name: 'Vintage Teal', textColor: '#f0fdfa', backgroundColor: '#0f766e' },
    { name: 'Autumn Maple', textColor: '#ffedd5', backgroundColor: '#9a3412' },
    { name: 'Winter Frost', textColor: '#f0f9ff', backgroundColor: '#0c4a6e' },
    { name: 'Spring Bloom', textColor: '#fdf2f8', backgroundColor: '#be185d' },
    { name: 'Summer Sun', textColor: '#fefce8', backgroundColor: '#ca8a04' },
    { name: 'Desert Sand', textColor: '#451a03', backgroundColor: '#fef3c7' },
    { name: 'Ocean Depth', textColor: '#f0f9ff', backgroundColor: '#0369a1' },
    { name: 'Mountain Peak', textColor: '#f8fafc', backgroundColor: '#475569' },
    { name: 'Forest Floor', textColor: '#f7fee7', backgroundColor: '#365314' },
    { name: 'Sunset Sky', textColor: '#fff7ed', backgroundColor: '#c2410c' },
    { name: 'Dawn Light', textColor: '#fefce8', backgroundColor: '#eab308' },
    { name: 'Midnight Sky', textColor: '#f1f5f9', backgroundColor: '#0f172a' }
  ];

  const applyPreset = (preset) => {
    setTextColor(preset.textColor);
    setBackgroundColor(preset.backgroundColor);
  };

  // Filter presets based on search term
  const filteredPresets = presetConfigs.filter(preset =>
    preset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: backgroundColor }}>
      {/* Gradient background with grain effect */}
      <div
        className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
        <div
          className="h-[10.5rem] rounded-full w-[63rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-600 to-sky-600"></div>
        <div
          className="h-[10.5rem] rounded-full w-[94.5rem] z-1 bg-gradient-to-b blur-[6rem] from-pink-900 to-yellow-400"></div>
        <div
          className="h-[10.5rem] rounded-full w-[63rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-noise opacity-30"></div>
      {/* Content container */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className="container mx-auto flex items-center justify-between px-4 py-4 mt-6">
          <div className="flex items-center scale-150 pl-0 md:pl-16 justify-center md:justify-start w-full md:w-auto">
            <button
              onClick={() => setPresetModalOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black overflow-hidden hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              <img 
                src="/logo.png" 
                alt="CodeStorm Logo" 
                className="h-8 w-8 object-contain"
              />
            </button>
            <span className="ml-2 text-xl font-inter text-white" style={{ fontWeight: '900' }}>Code</span>
            <span className="text-xl font-inter text-orange-500" style={{ fontWeight: '900' }}>Storm</span>
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
                  <span className="ml-2 text-xl font-inter text-white" style={{ fontWeight: '900' }}>
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

        {/* Preset Modal */}
        <AnimatePresence>
          {presetModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-start p-4"
            >
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-black/30"
                onClick={() => setPresetModalOpen(false)}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md h-[90vh] overflow-hidden ml-4 mt-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-inter font-bold text-white">
                    Choose Theme
                  </h2>
                  <button
                    onClick={() => setPresetModalOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-white" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search themes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-inter text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>

                {/* Presets Grid - Scrollable */}
                <div className="flex-1 overflow-y-auto pr-2" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                  <div className="grid grid-cols-2 gap-3">
                    {filteredPresets.map((preset, index) => (
                      <button
                        key={index}
                        onClick={() => applyPreset(preset)}
                        className="group relative p-3 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105"
                        style={{ backgroundColor: preset.backgroundColor }}
                      >
                        <div 
                          className="w-full h-8 rounded-lg mb-2 flex items-center justify-center text-sm font-bold"
                          style={{ color: preset.textColor }}
                        >
                          Aa
                        </div>
                        <p className="text-xs font-inter text-white text-center truncate">
                          {preset.name}
                        </p>
                        
                        {/* Active indicator */}
                        {textColor === preset.textColor && backgroundColor === preset.backgroundColor && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        )}

                        {/* Hover effect */}
                        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </button>
                    ))}
                  </div>
                  
                  {filteredPresets.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-white/60 font-inter text-sm">No themes found matching "{searchTerm}"</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t border-white/20 flex flex-col gap-3">
                  <p className="text-xs text-white/60 font-inter text-center">
                    {filteredPresets.length} theme{filteredPresets.length !== 1 ? 's' : ''} available
                  </p>
                  <button
                    onClick={() => applyPreset(presetConfigs[0])}
                    className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white font-inter font-medium rounded-lg transition-all duration-200 border border-white/30 hover:border-white/50 text-sm"
                  >
                    Reset to Classic
                  </button>
                </div>
              </motion.div>
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
  className="mx-auto max-w-4xl text-8xl font-bold leading-[0.8] text-white md:text-9xl lg:text-9xl"
  style={{ color: textColor, fontFamily: 'Pirata One, sans-serif' }}>
  ESCAPE
</h1>
<h1
  className="mx-auto max-w-4xl text-8xl font-bold leading-[0.8] text-white md:text-9xl lg:text-9xl"
  style={{ color: textColor, fontFamily: 'Pirata One, sans-serif' }}>
  ROOM
</h1>

          {/* Testimonials Section */}
          <div className="mt-4">
            <TestimonialsSectionDemo />
          </div>

          <div
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">

          </div>

          <div className="relative mx-auto my-20 w-full max-w-6xl">
            <div
              className="absolute inset-0 rounded shadow-lg bg-white blur-[10rem] bg-grainy opacity-20" />
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
