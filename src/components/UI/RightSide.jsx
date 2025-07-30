import { LayoutDashboardIcon } from 'lucide-react'
import Dashboard from '../UI/Data/Dashboard'
import React from 'react'
import useThemeStore from '../../store/ThemeStore'
import useModesStore from '../../store/ModesStore'

export default function RightSide() {
  const theme = useThemeStore(state => state.theme);
  const { active, Modes } = useModesStore();
  const activeItem = Modes.find((m) => m.id === active) || {};
  
  return (
    <div className={`flex flex-col h-screen w-full border-l ${theme ? 'border-gray-700 bg-gray-900/90' : 'border-gray-200 bg-white/95'} backdrop-blur-sm overflow-y-auto`}>
      {/* Dashboard Header */}
      <nav className={`flex items-center justify-start py-5 px-6 gap-3 border-b ${theme ? 'border-gray-700' : 'border-gray-200/50'}`}>
        <span className={`p-2 rounded-lg ${theme ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
          <LayoutDashboardIcon size={20} />
        </span>
        <span className={`text-lg font-semibold ${theme ? 'text-white' : 'text-gray-800'}`}>AI Dashboard</span>
      </nav>

      {/* Stats Cards */}
      <div className='p-6 grid grid-cols-2 gap-3'>
        {Dashboard.map(item => (
          <div
            key={item.id}
            className={`p-4 rounded-xl border ${theme ? 'border-gray-700 bg-gray-800/50 hover:shadow-lg' : 'border-gray-200/70 bg-white hover:shadow-sm'} transition-shadow`}
          >
            <div className={`flex items-center gap-2 ${theme ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
              {item.icon}
              <span className='text-xs font-medium'>{item.text}</span>
            </div>
            <div className={`text-md font-bold ${theme ? 'text-white' : 'text-gray-800'}`}>{item.number}</div>
          </div>
        ))}
      </div>

      {/* Mode Usage Section */}
      <div className={`px-6 py-4 border-t ${theme ? 'border-gray-700' : 'border-gray-200/50'}`}>
        <h3 className={`text-xs font-semibold uppercase tracking-wider ${theme ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
          Mode Usage Analytics
        </h3>
        <div className="space-y-4">
          {Modes.map(mode => (
            <div key={mode.id} className="group">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium flex items-center gap-2 ${theme ? 'text-gray-300' : 'text-gray-700'} ${mode.id === activeItem?.id ? 'font-bold' : ''}`}>
                  {mode.icon}
                  {mode.text}
                </span>
                {mode.id === activeItem?.id && (
                  <span className={`text-xs font-medium ${theme ? 'text-gray-400' : 'text-gray-500'}`}>{mode.percent}</span>
                )}
              </div>
              <div className={`w-full rounded-full h-1.5 ${theme ? 'bg-gray-700' : 'bg-gray-200'}`}>
                {mode.id === activeItem?.id ? (
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${parseInt(mode.percent) > 70 ? (theme ? 'bg-green-400' : 'bg-green-500') :
                        parseInt(mode.percent) > 30 ? (theme ? 'bg-yellow-400' : 'bg-yellow-500') :
                          (theme ? 'bg-red-400' : 'bg-red-500')
                      }`}
                    style={{ width: mode.percent }}
                  ></div>
                ) : (
                  <div className="h-1.5 rounded-full bg-transparent" style={{ width: '100%' }}></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}