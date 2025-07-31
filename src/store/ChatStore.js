import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import useModesStore from './ModesStore';

const useChatStore = create(immer((set) => ({
  message: "",
  messages: {
    1: [], 
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },

  setMessage: (newMessage) => set({ message: newMessage }),

  sendMessage: () => {
    set((state) => {
      const msg = state.message.trim();
      if (!msg) return;

      const active = useModesStore.getState().active;
      const userMsg = {
        role: "user",
        content: msg,
        timestamp: Date.now(),
      };
      
      state.messages[active] = [...(state.messages[active] || []), userMsg].slice(-100);
      state.message = "";
    });
  },
})));

export default useChatStore;