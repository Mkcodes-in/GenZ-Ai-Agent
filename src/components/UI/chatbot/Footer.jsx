import { Mic, ChevronDown, ArrowUp, KeyIcon } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import AiModes from '../../Integrations/AiModes'

export default function Footer({ activePlaceholder, currentText, theme }) {
  const [message, setMessage] = useState('')
  const [activeModel, setActiveModel] = useState('Groq')
  const [showModels, setShowModels] = useState(false)
  const textareaRef = useRef(null)
  const modelsDropdownRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const sendMessage = () => {
    if (message.trim()) {
      console.log(`Message sent to ${activeModel}:`, message)
      setMessage('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault()
      sendMessage()
    } else if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
      setMessage(prev => prev + '\n')
    }
  }

  const handleModelChange = (model) => {
    setActiveModel(model)
    setShowModels(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelsDropdownRef.current && !modelsDropdownRef.current.contains(event.target)) {
        setShowModels(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (currentText) {
      setMessage(currentText)
    }
  }, [currentText])

  return (
    <footer className={`sticky bottom-0 z-10 ${theme ? 'bg-gray-900/90 border-gray-700' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-t transition-colors duration-300 px-4 py-3`}>
      <form onSubmit={handleSubmit} className='w-full'>
        <div className='flex items-center gap-2 w-full'>
          {/* Model Switcher */}
          <div className='relative' ref={modelsDropdownRef}>
            <button
              type='button'
              onClick={() => setShowModels(!showModels)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border ${theme ? 'border-gray-600 hover:bg-gray-800 text-gray-200' : 'border-gray-300 hover:bg-gray-100 text-gray-700'} transition-colors text-sm font-medium cursor-pointer`}
            >
              {activeModel}
              <ChevronDown size={16} className={`transition-transform ${showModels ? 'rotate-180' : ''}`} />
            </button>

            {showModels && (
              <div className={`absolute bottom-full mb-2 left-0 w-40 rounded-lg shadow-lg border ${theme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden z-20`}>
                {AiModes.map((model) => (
                  <button
                    key={model.name}
                    type='button'
                    onClick={() => handleModelChange(model.name)}
                    className={`w-full cursor-pointer text-left px-3 py-2.5 text-sm flex items-center justify-between ${theme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${activeModel === model.name ? (theme ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600') : (theme ? 'text-gray-300' : 'text-gray-700')}`}
                    disabled={model.premium}
                  >
                    <span className='capitalize'>{model.name}</span>
                    {model.premium && <KeyIcon size={14} className={theme ? 'text-gray-500' : 'text-gray-400'} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className='flex-1 relative'>
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={activePlaceholder}
              className={`w-full h-[62px] px-4 py-3 pr-24 rounded-xl border ${theme ? 'bg-gray-800 border-gray-700 text-gray-200 focus:border-blue-500 focus:ring-blue-500/30' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-200'} resize-none outline-none transition-all overflow-y-auto scrollbar-thin ${theme ? 'scrollbar-thumb-gray-600' : 'scrollbar-thumb-gray-300'} scrollbar-track-transparent`}
            />

            {/* Mic Button */}
            <button
              type='button'
              className={`absolute right-14 bottom-2.5 p-1.5 rounded-full ${theme ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'} transition-colors cursor-pointer`}
            >
              <Mic size={20} />
            </button>

            {/* Send Button */}
            <button
              type='submit'
              disabled={!message.trim()}
              className={`absolute right-2 bottom-2.5 p-1.5 rounded-full transition-colors ${message.trim() ? (theme ? 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer' : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer') : (theme ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')}`}
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </form>
    </footer>
  )
}