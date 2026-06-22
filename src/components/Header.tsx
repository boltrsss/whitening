import { useState } from 'react';

export default function Header() {
  return (
    <header className="bg-[#1a5f4c] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl md:text-2xl font-serif tracking-tight">Health & Wellness Daily</span>
              <span className="text-[#64b59e] text-2xl md:text-3xl ml-1 leading-none inline-block -translate-y-0.5">•</span>
            </div>
            
            <div className="h-8 w-px bg-[#2d7a64] mx-3 sm:mx-4 hidden sm:block"></div>
            
            <div className="hidden sm:flex flex-col text-[#a3d1c2] text-[11px] font-medium leading-tight">
              <span>by</span>
              <span>consumerskills.org</span>
            </div>
          </div>
          
          <div className="text-[#a3d1c2] text-xs font-medium uppercase tracking-widest">
            Advertorial
          </div>
        </div>
      </div>
    </header>
  );
}
