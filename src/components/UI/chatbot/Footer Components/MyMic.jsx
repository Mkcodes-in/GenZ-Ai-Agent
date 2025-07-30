import React from 'react'
import useThemeStore from '../../../../store/ThemeStore'
import { Mic } from 'lucide-react';

export default function MyMic() {
  const theme = useThemeStore(state => state.theme);
  return (
    <button
      type='button'
      className={`absolute right-14 bottom-2.5 p-1.5 rounded-full ${theme ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'} transition-colors cursor-pointer`}
    >
      <Mic size={20} />
    </button>
  )
}
