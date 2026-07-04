import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a href="https://wa.me/263785286435" target="_blank" rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-pulse-glow"
    style={{ boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}>
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
