import { create } from "zustand";
import useModesStore from "./ModesStore";
  
const useChatStore = create((set, get) => ({
  message: "",
  messages: [],

  setMessage: (newMessage) => set({ message: newMessage }),

  sendMessage: () => {
    const state = get();
    const msg = state.message.trim();

    if (!msg) return;

    const active = useModesStore.getState().active;
    const userMsg = {
      role: "user",
      content: msg,
      mode: active,
    };

    console.log("Message sent to:", userMsg);

    return set({
      messages: [...state.messages, userMsg],
      message: "",
    });
  },
}));

export default useChatStore;
