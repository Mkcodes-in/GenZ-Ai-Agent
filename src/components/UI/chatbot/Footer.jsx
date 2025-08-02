import { ArrowUp } from 'lucide-react'
import useModesStore from '../../../store/ModesStore'
import MyMic from './Footer Components/MyMic'
import useChatStore from '../../../store/ChatStore'
import ModelSwitcher from './Footer Components/ModelSwitcher'
import useThemeStore from '../../../store/ThemeStore'
import { useEffect } from 'react'

export default function Footer() {
  const { message, setMessage } = useChatStore();
  const sendMessage = useChatStore(state => state.sendMessage);

  const { active, Modes } = useModesStore();
  const activeItem = Modes.find((itm) => itm.id === active);
  const theme = useThemeStore(state => state.theme);
  const currentText = useModesStore(state => state.currentText);

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
      e.preventDefault()
      sendMessage()
    } else if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
      setMessage(prev => prev + '\n')
    }
  }

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
          <ModelSwitcher />

          {/* Message Input */}
          <div className='flex-1 relative'>
            <textarea
              // ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={activeItem.placeholder}
              className={`w-full h-[62px] px-4 py-3 pr-24 rounded-xl border ${theme ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/30' : 'bg-white border-gray-300 text-black focus:border-blue-500 focus:ring-blue-200'} resize-none outline-none transition-all overflow-y-auto scrollbar-thin ${theme ? 'scrollbar-thumb-gray-600' : 'scrollbar-thumb-gray-300'}  scrollbar-track-transparent`}
            />

            {/* Mic Button */}
            <MyMic />

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