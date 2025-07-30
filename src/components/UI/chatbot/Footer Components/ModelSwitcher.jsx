import React, { useEffect, useRef } from 'react'
import useThemeStore from '../../../../store/ThemeStore';
import { ChevronDown, KeyIcon } from 'lucide-react';
import useModelsStore from '../../../../store/ModelStore';

export default function ModelSwitcher() {
  const theme = useThemeStore(state => state.theme);
  const showModels = useModelsStore(state => state.showModels);
  const setShowModels = useModelsStore(state => state.setShowModels);
  const handleShowModels = useModelsStore(state => state.handleShowModels);
  const activeModel = useModelsStore(state => state.activeModels);
  const Models = useModelsStore(state => state.Models);
  const activeModelsName = Models.find(m => m.id === activeModel)?.name;
  const setActiveModels = useModelsStore(state => state.setActiveModels);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const OuterClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowModels(false);
      }
    };

    document.addEventListener("mousedown", OuterClick);
    return () => {
      document.removeEventListener("mousedown", OuterClick);
    }
  }, [setShowModels]);

  return (
    <div
      className='relative'
      ref={dropdownRef}
    >
      <button
        type='button'
        onClick={handleShowModels}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border ${theme ? 'border-gray-600 hover:bg-gray-800 text-gray-200' : 'border-gray-300 hover:bg-gray-100 text-gray-700'} transition-colors text-sm font-medium cursor-pointer`}
      >
        {activeModelsName}
        <ChevronDown size={16} className={`transition-transform ${showModels ? 'rotate-180' : ''}`} />
      </button>

      {showModels && (
        <div className={`absolute bottom-full mb-2 left-0 w-40 rounded-lg shadow-lg border ${theme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden z-20`}>
          {Models.map((model) => (
            <button
              key={model.id}
              type='button'
              onClick={() => {
                setActiveModels(model.id)
                setShowModels(false);
              }}
              className={`w-full cursor-pointer text-left px-3 py-2.5 text-sm flex items-center justify-between ${theme ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} ${model.name ? (theme ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600') : (theme ? 'text-gray-300' : 'text-gray-700')}`}
            >
              <span className='capitalize'>{model.name}</span>
              {model.icon && <KeyIcon size={14} className={theme ? 'text-gray-500' : 'text-gray-400'} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
