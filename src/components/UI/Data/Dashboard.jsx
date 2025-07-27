import { Brain, MessageCircleDashed, TimerIcon, ZapIcon } from "lucide-react";

const Dashboard = [
    {
        id: 1, 
        icon: <MessageCircleDashed size={14}/>,
        text: "Messages",
        number : 0,
    },{     
        id: 2, 
        icon: <TimerIcon size={14}/>,
        text: "Avg Time",
        number : "0.0s",
    },{
        id: 3, 
        icon: <Brain size={14}/>,
        text: "Mode",
        number : "General",
    },{
        id: 4, 
        icon: <ZapIcon size={14}/>,
        text: "Session",
        number : 0,
    }
];

export default Dashboard