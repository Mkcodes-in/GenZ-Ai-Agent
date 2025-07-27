import {
    Github,
    MessageSquare,
    Sun,
    Trash2,
    Moon,
    Menu
} from 'lucide-react'
import React from 'react'

export default function Header({
    activeDes,
    activeText,
    activeIcon,
    handleTheme,
    theme,
    toggleMobileMenu
}) {
    return (
        <header className={`sticky top-0 z-30 ${theme ? "bg-gray-900/90 border-gray-700" : "bg-white/90 border-gray-200"} backdrop-blur-sm border-b transition-colors duration-300`}>
            <nav className='px-6 py-4 flex items-center justify-between'>
                {/* Left Side */}
                <div className='flex items-center gap-4'>
                    <button
                        onClick={toggleMobileMenu}
                        className={`lg:hidden p-2 rounded-lg ${theme ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"} transition-colors cursor-pointer`}
                    >
                        <Menu size={20} />
                    </button>
                    <div className={`p-2 rounded-lg ${theme ? "bg-gray-200/20" : "bg-blue-200/20 text-blue-600"} transition-colors`}>
                        {activeIcon}
                    </div>
                    <div>
                        <h1 className={`text-lg font-semibold ${theme ? "text-white" : "text-gray-800"} transition-colors`}>
                            {activeText} Assistant
                        </h1>
                        <p className={`hidden sm:block text-sm ${theme ? "text-gray-400" : "text-gray-600"} transition-colors`}>
                            {activeDes}
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex items-center gap-1'>
                    <button
                        onClick={handleTheme}
                        className={`p-2 rounded-lg ${theme ? "hover:bg-gray-700 text-gray-300 hover:text-blue-400" : "hover:bg-gray-100 text-gray-600 hover:text-blue-600"} transition-colors cursor-pointer`}
                    >
                        {theme ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className={`p-2 rounded-lg ${theme ? " text-gray-300" : "text-gray-600"} transition-colors`}>
                        <MessageSquare size={20} />
                    </button>

                    <button className={`p-2 rounded-lg ${theme ? "hover:bg-gray-700 text-gray-300 hover:text-red-400" : "hover:bg-gray-100 text-gray-600 hover:text-red-600"} transition-colors cursor-pointer`}>
                        <Trash2 size={20} />
                    </button>

                    <button className={`p-2 rounded-lg ${theme ? "hover:bg-gray-700 text-gray-300 hover:text-gray-100" : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"} transition-colors cursor-pointer`}>
                        <Github size={20} />
                    </button>
                </div>
            </nav>
        </header>
    )
} {/* <div className="mt-3 text-xs font-medium text-gray-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          GanZ AI is thinking
        </div> */}