import React, { useState } from 'react'
import Chats from '../UI/chatbot/Chats'
import Footer from '../UI/chatbot/Footer'
import Header from './chatbot/Header'

export default function Middle() {

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-full">
      {/* Chat Header */}
      <div>
        <Header />
      </div>

      {/* Chats */}
      <div className="overflow-y-auto">
        <Chats />
      </div>

      {/* Chats Footer with input field */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
