import React, { useMemo } from 'react'
import Animation from '../../Animation'
import useThemeStore from '../../../store/ThemeStore';
import useModesStore from '../../../store/ModesStore';
import useChatStore from '../../../store/ChatStore';
import AiChatResponse from './AiChatResponse';

export default function Chats() {
  const theme = useThemeStore(state => state.theme);
  const { active, Modes } = useModesStore();
  const activeItem = Modes.find((itm) => itm.id === active);
  const handleCurrentText = useModesStore(state => state.handleCurrentText);
  const allMessages = useChatStore((s) => s.messages);
  const messages = useMemo(() => allMessages[active] || [], [allMessages, active]);


  return (
    <div className={`flex flex-col h-full ${theme ? 'bg-gray-900' : 'bg-white'}`}>
      {messages.length === 0 ? (
        <div className={`flex flex-col h-full p-6 space-y-8 overflow-y-auto ${theme ? 'bg-gray-900' : 'bg-white'}`}>
          {/* AI Avatar */}
          <div className="flex flex-col items-center animate-float">
            <div className={`w-24 h-24 rounded-full overflow-hidden flex items-center justify-center ${theme ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm shadow-lg border-4 ${theme ? 'border-gray-700/20' : 'border-white/20'} mx-auto`}>
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${theme ? 'from-blue-600/20 to-purple-700/20' : 'from-blue-400/20 to-purple-500/20'}`}></div>
              <Animation className="relative z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center">
            <div className={`${theme ? 'text-gray-100' : 'text-gray-900'} font-bold text-2xl px-4 leading-relaxed`}>
              {activeItem.goal}
            </div>

            <div className={`${theme ? 'text-gray-300' : 'text-gray-700'} text-md px-8 leading-relaxed`}>
              {activeItem.summary}
            </div>
          </div>

          {/* Suggestions */}
          {activeItem.suggest && (
            <div className={`mt-auto pt-6 border-t ${theme ? 'border-gray-700' : 'border-gray-100'}`}>
              <div className="flex flex-wrap justify-center gap-3">
                {React.Children.map(activeItem.suggest, (suggestion, index) => (
                  <button
                    onClick={() => handleCurrentText(suggestion)}
                    key={index}
                    className={`px-5 py-3 rounded-full text-sm font-medium shadow-xs hover:shadow-sm transition-all
                ${theme ?
                        'bg-gray-800 border-gray-700 hover:border-blue-500 hover:bg-gray-700 text-gray-200 hover:text-blue-400' :
                        'bg-white border-gray-100 hover:border-blue-200 hover:from-white hover:to-blue-50/50 text-gray-700 hover:text-blue-600'
                      } border cursor-pointer`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (<AiChatResponse />)}
    </div>
  )
}