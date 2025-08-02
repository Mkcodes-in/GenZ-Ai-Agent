import { Key } from "lucide-react";

const Models = [
    {
        id: 1,
        name: "Groq",
        keyRequired: false,
    }, {
        id: 2,
        name: "Gemini",
        keyRequired: false,
    }, {
        id: 3,
        name: "ChatGPT",
        keyRequired: true,
        icon: <Key size={18} />
    },
    {
        id: 4,
        name: "DeepSeek",
        keyRequired: true,
        icon: <Key size={18} />
    }
];

export default Models;