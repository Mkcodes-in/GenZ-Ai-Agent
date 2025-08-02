import {
    BookOpen,
    Brain,
    Goal,
    Heart,
    Lightbulb,
    Users
} from "lucide-react";

const Modes = [
    {
        id: 1,
        icon: <Brain size={20} className="text-indigo-600 dark:text-indigo-300" />,
        text: "General",
        percent: "10%",
        lightMode: "bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-indigo-900/20 text-indigo-100 border border-indigo-700 hover:bg-indigo-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "Ask me anything...",
        des: "General assistance and conversation",
        goal: "What can I help you with?",
        summary: "I'm your General assistant. Ask me anything or use the given suggestions to get started.",
        suggest: [
            "Help me make a decision",
            "Explain complex topic",
            "Give advice on a situation",
            "Solve a problem step by step",
        ]
    },
    {
        id: 2,
        icon: <Goal size={20} className="text-teal-600 dark:text-teal-300" />,
        text: "Productivity",
        percent: "5%",
        lightMode: "bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-teal-900/20 text-teal-100 border border-teal-700 hover:bg-teal-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "How can I help you be more productive?",
        des: "Task management and organization",
        goal: "What can I help you productivity?",
        summary: "I'm your productivity assistant. Ask me anything or use the given suggestions to get started.",
        suggest: [
            "Plan my day effectively",
            "Break down a project",
            "Prioritize my tasks",
            "Time management tips"
        ]
    },
    {
        id: 3,
        icon: <Heart size={20} className="text-rose-600 dark:text-rose-300" />,
        text: "Wellness",
        percent: "8%",
        lightMode: "bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-rose-900/20 text-rose-100 border border-rose-700 hover:bg-rose-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "What wellness topic can I help with?",
        des: "Health and well-being guidance",
        goal: "What can I help you wellness?",
        summary: "I'm your wellness assistant. Ask me anything or use the given suggestions to get started.",
        suggest: [
            "Morning routine ideas",
            "Stress management techniques",
            "Healthy habit suggestions",
            "Workout planning"
        ]
    },
    {
        id: 4,
        icon: <BookOpen size={20} className="text-blue-600 dark:text-blue-300" />,
        text: "Learning",
        percent: "13%",
        lightMode: "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-blue-900/20 text-blue-100 border border-blue-700 hover:bg-blue-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "What would you like to learn?",
        des: "Education and skill development",
        goal: "What can I help you learning?",
        summary: "I'm your learning assistant. Ask me anything or use the given suggestions to get started.",
        suggest: [
            "Explain a concept",
            "Create a study plan",
            "Learning resources",
            "Practice exercises"
        ],
    },
    {
        id: 5,
        icon: <Lightbulb size={20} className="text-amber-600 dark:text-amber-300" />,
        text: "Creative",
        percent: "15%",
        lightMode: "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-amber-900/20 text-amber-100 border border-amber-700 hover:bg-amber-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "Let's brainstorm something creative...",
        des: "Ideas and creative projects",
        goal: "What can I help you create?",
        summary: "I'm your creative assistant. Ask me anything or use the given suggestions to get started.",
        suggest: [
            "Brainstorm ideas",
            "Creative writing prompts",
            "Project inspiration",
            "Overcome creative blocks"
        ]
    },
    {
        id: 6,
        icon: <Users size={20} className="text-purple-600 dark:text-purple-300" />,
        text: "BFF",
        percent: "0%",
        lightMode: "bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        darkMode: "bg-purple-900/20 text-purple-100 border border-purple-700 hover:bg-purple-900/30 hover:shadow-md shadow-sm transition-all delay-300 ease-in",
        placeholder: "Hey bestie, what's up? 💕",
        des: "Your GenZ bestie who speaks your language",
        goal: "Hey bestie! What's on your mind? 💕",
        summary: "I'm your GenZ bestie who speaks your language! Chat with me in any language and I'll vibe with you! ✨",
        suggest: [
            "What's the tea? ☕",
            "I need some motivation 💪",
            "Help me with drama 🎭",
            "Let's chat about life 💫"
        ]
    }
];

export default Modes;