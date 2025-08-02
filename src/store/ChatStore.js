import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import useModesStore from './ModesStore';

const useChatStore = create(immer((set, get) => ({
  message: "",
  messages: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },

  // loader false 
  isLoading: false,

  // input new query by user
  setMessage: (newMessage) => set({ message: newMessage }),

  // clear msg only which mode are active 
  clearChat: () => {
    const active = useModesStore().getState().active;
    set((state) => {
      state.messages[active] = [];
    })
  },

  // 
  sendMessage: () => {
    set((state) => {
      const msg = state.message.trim();
      if (!msg) return;

      const active = useModesStore.getState().active;
      const userMsg = {
        role: "user",
        content: msg,
        timestamp: Date.now(),
        mode: active,
      };

      // max chat lenght is 100 only 
      state.messages[active] = [...(state.messages[active] || []), userMsg].slice(-100);
      state.message = "";
    });
  },

  // Model response 
  modelResponse: (text) => {
    const active = useModesStore.getState().active;
    const modelMsg = {
      role: "assistant",
      content: text,
      timestamp: Date.now(),
      mode: active,
    };
    set((state) => {
      state.messages[active] = [...(state.messages[active] || []), modelMsg].slice(-100);
    });
  },

  // set loading 
  setLoading: (val) => set({ isLoading: val }),
})));

export default useChatStore;