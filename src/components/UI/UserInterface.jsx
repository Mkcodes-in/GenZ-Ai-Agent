import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide'
import Middle from './Middle'
import RightSide from './RightSide'
import useThemeStore from '../../store/ThemeStore'

export default function UserInterface() {
  const theme = useThemeStore(state => state.theme);
  const isMobile = useThemeStore(state => state.isMobile);
  const setIsMobile = useThemeStore(state => state.setIsMobile);
  const setMobileMenuOpen = useThemeStore(state => state.setMobileMenuOpen);
  const mobileMenuOpen = useThemeStore(state => state.mobileMenuOpen);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`flex h-screen relative ${theme ? 'dark' : ''}`}>
      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Left Side */}
      <div className={`
        ${isMobile ? 'fixed' : 'static'}
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        z-50 transition-transform duration-300 ease-in-out
        w-72 h-full
      `}>
        <LeftSide />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Middle />
      </div>

      {/* Right Side */}
      <div className="hidden w-72 xl:block">
        <RightSide />
      </div>
    </div>
  )
}
