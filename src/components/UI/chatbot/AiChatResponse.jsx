import React, { useMemo } from 'react'
import useThemeStore from '../../../store/ThemeStore'
import useChatStore from '../../../store/ChatStore';
import { Bot, User } from 'lucide-react';
import useModesStore from '../../../store/ModesStore';

export default function AiChatResponse() {
  const theme = useThemeStore().theme;
  const active = useModesStore((s) => s.active);
  const allMessages = useChatStore((s) => s.messages);
  const messages = useMemo(() => allMessages[active] || [], [allMessages, active]);

  return (
    <div className="flex flex-col h-full">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? 'justify-end' : 'justify-start'} items-start gap-3`}
          >
            {message.role !== "user" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${theme ? modeColors.dark : modeColors.light}`}>
                <Bot size={16} className={theme ? 'text-gray-300' : 'text-gray-600'} />
              </div>
            )}

            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 relative ${message.role === "user" ?
                theme ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' :
                theme ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'
                }`}
            >
              <div className="text-sm whitespace-pre-wrap">{message.content}</div>
              <div className={`text-xs mt-1 text-right ${message.role === "user" ?
                theme ? 'text-blue-200' : 'text-blue-100' :
                theme ? 'text-gray-400' : 'text-gray-500'
                }`}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {message.role === "user" && (
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${theme ? 'bg-blue-800' : 'bg-blue-400'}`}>
                <User size={16} className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}