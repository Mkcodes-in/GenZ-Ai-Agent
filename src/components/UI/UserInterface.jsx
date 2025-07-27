import React, { useState, useEffect } from 'react'
import LeftSide from './LeftSide'
import Middle from './Middle'
import RightSide from './RightSide'
import Modes from './Data/Modes';

export default function UserInterface() {
  const [active, setActive] = useState(1);
  const [theme, setTheme] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  function handleTheme() {
    setTheme(!theme);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function handleActive(id) {
    setActive(id);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  }

  const activeItem = Modes.find(itm => itm.id == active);
  const activeText = activeItem ? activeItem.text : "";
  const activeDes = activeItem ? activeItem.des : "";
  const activeIcon = activeItem ? activeItem.icon : "";
  const activeGoal = activeItem ? activeItem.goal : "";
  const activePlaceholder = activeItem ? activeItem.placeholder : "";
  const activeSummary = activeItem ? activeItem.summary : "";
  const activeSuggestion = activeItem ? activeItem.suggest : [];



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
        <LeftSide
          theme={theme}
          handleTheme={handleTheme}
          handleActive={handleActive}
          active={active}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Middle
          toggleMobileMenu={toggleMobileMenu}
          theme={theme}
          handleTheme={handleTheme}
          activeDes={activeDes}
          activeText={activeText}
          activeIcon={activeIcon}
          activeGoal={activeGoal}
          activePlaceholder={activePlaceholder}
          activeSummary={activeSummary}
          activeSuggestion={activeSuggestion}
        />
      </div>

      {/* Right Side */}
      <div className="hidden w-72 xl:block">
        <RightSide
          theme={theme}
          activeItem={activeItem}
        />
      </div>
    </div>
  )
}
