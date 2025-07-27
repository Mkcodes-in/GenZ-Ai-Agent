import React, { useState } from 'react'
import Chats from '../UI/chatbot/Chats'
import Footer from '../UI/chatbot/Footer'
import Header from './chatbot/Header'

export default function Middle({ activeDes, activeText, activeIcon, activeGoal, activePlaceholder, activeSummary, activeSuggestion, theme, handleTheme, menubar, handleMenuBar, toggleMobileMenu }) {

  const [currentText, setCurrentText] = useState(null);

  function handleCurrentText(text) {
    setCurrentText(text);
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-full">
      {/* Chat Header */}
      <div>
        <Header
          toggleMobileMenu={toggleMobileMenu}
          activeDes={activeDes}
          activeText={activeText}
          activeIcon={activeIcon}
          theme={theme}
          handleTheme={handleTheme}
          handleMenuBar={handleMenuBar}
          menubar={menubar}
        />
      </div>

      {/* Chats */}
      <div className="overflow-y-auto">
        <Chats
          handleCurrentText={handleCurrentText}
          activeGoal={activeGoal}
          activeSummary={activeSummary}
          activeSuggestion={activeSuggestion}
          theme={theme}
        />
      </div>

      {/* Chats Footer with input field */}
      <footer>
        <Footer
          currentText={currentText}
          activePlaceholder={activePlaceholder}
          theme={theme}
        />
      </footer>
    </div>
  )
}
