import React from 'react'
import { ArrowRight, InfoIcon, ZapIcon } from 'lucide-react'
import useThemeStore from '../../store/ThemeStore';
import useModesStore from '../../store/ModesStore';

export default function LeftSide() {
    const theme = useThemeStore(state => state.theme);
    const closeMobileMenu = useThemeStore(state => state.setMobileMenuOpen);
    const {active, setActive, Modes } = useModesStore();

    const handleClick = (id) => {
    setActive(id);
    closeMobileMenu(false);
  };
    return (
        <div className={`w-full h-screen flex flex-col border-r ${theme ? 'border-gray-700 bg-gray-900/90' : 'border-gray-200 bg-white/95'} backdrop-blur-sm overflow-y-auto`}>
            {/* Header */}
            <div className={`p-6 flex items-center gap-3 border-b ${theme ? 'border-gray-700' : 'border-gray-200/50'}`}>
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm">
                    <ZapIcon size={24} className="text-white" />
                </div>
                <div>
                    <h1 className={`text-xl font-bold ${theme ? 'text-white' : 'text-gray-800'}`}>GanZ</h1>
                    <p className={`text-xs ${theme ? 'text-gray-400' : 'text-gray-500'} font-medium`}>AI Assistant</p>
                </div>
            </div>

            {/* Modes */}
            <div className={`flex-1 px-4 py-6 space-y-6 border-b ${theme ? 'border-gray-700' : 'border-gray-200/50'}`}>
                <div className="space-y-2">
                    <h3 className={`text-xs font-semibold uppercase tracking-wider px-2 ${theme ? 'text-gray-400' : 'text-gray-500'}`}>
                        AI Features
                    </h3>
                    <div className="space-y-2">
                        {Modes.map(item => (
                            <button
                                onClick={() => handleClick(item.id)}
                                key={item.id}
                                className={`flex items-center gap-3 w-full px-3 py-3 rounded-xl transition-all duration-200 group cursor-pointer
                                ${theme ? 
                                    active === item.id ? 
                                        `${item.darkMode}` : 
                                        'hover:bg-gray-800 text-gray-300 hover:text-blue-400' :
                                    active === item.id ? 
                                        `${item.lightMode}` : 
                                        'hover:bg-blue-50/50 text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                <span className={`p-2 rounded-lg transition-colors
                                    ${theme ? 
                                        active === item.id ? 
                                            'bg-blue-800/40 text-blue-400' : 
                                            'bg-gray-800 text-gray-500 group-hover:bg-blue-800/30 group-hover:text-blue-400' :
                                        active === item.id ? 
                                            'bg-blue-100 text-blue-600' : 
                                            'bg-gray-100 text-gray-600 group-hover:bg-blue-100'
                                    }`}>
                                    {item.icon}
                                </span>
                                <span className="text-sm font-medium">{item.text}</span>
                                <span className="ml-auto text-blue-500">
                                   {active === item.id ? <ArrowRight size={14}/> : ""}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* AI Status Indicator */}
                <div className={`mt-8 p-4 rounded-xl border ${theme ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200/70'}`}>
                    <div className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1.5 rounded-full ${theme ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                           <InfoIcon size={18}/>
                        </div>
                        <div>
                            <h4 className={`text-sm font-medium ${theme ? 'text-gray-200' : 'text-gray-800'}`}>System Status</h4>
                            <p className={`text-xs ${theme ? 'text-gray-400' : 'text-gray-500'} mt-1`}>All features operational</p>
                            <div className={`mt-2 w-full rounded-full h-1.5 ${theme ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                <div className={`h-1.5 rounded-full ${theme ? 'bg-green-400' : 'bg-green-500'}`} style={{width: '100%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}